Title: PageSpeed Optimization
Subtitle: How I sped up my site using Google's PageSpeed module
Date: 2017-08-06
Slug: blog/code/pagespeed
Category: code
Tags: Code
Author: Sean McGlothlin
Alias: /code/pagespeed.html

Having a beautiful website is important, but nobody's going to stick around to appreciate it if the content is too slow to load. Static content alone can bring rendering to a crawl when performance is overlooked, even when the static resources are seemingly simple. With this in mind, I set out to deliver my site content as fast as possible and learn the best practices to make it happen.

### What is PageSpeed?

The [PageSpeed](https://developers.google.com/speed/pagespeed/module/){:target="\_blank"} module is a web server plugin, offered for both Apache and nginx. It does all the heavy lifting for you by optimizing resources automatically. This gives you the freedom to fine tune your site in a way that works best for your specific use case, making for both a happy user and a happy developer.

### Why PageSpeed?

There are many possible ways to optimize content delivery, but the PageSpeed module proved to be the simplest for me. Your definition of "simple" may differ; I had to recompile nginx from source to use this module, which can be tricky if you've never done it before.

---

### Getting Started

Browse to the [PageSpeed documentation](https://modpagespeed.com/doc/){:target="\_blank"} for specific installation instructions for your web server. Since I used nginx, I'll outline the steps I took below. If you're using Apache, feel free to skip ahead to the [Configuring PageSpeed](#configure) section below.

I had to recompile nginx from source and remember to include my existing modules such as OpenSSL. I **highly** recommend you don't shut down your web server before attempting this in case you mess up your configuration and are left with a broken production environment while you figure out what you did wrong. Go ahead, ask me how I know.

First, get your preferred version of nginx. This may be a good time to update to a later version if you so choose.

```text
$ wget http://nginx.org/download/nginx-<version>.tar.gz
```

Extract the folder and browse to it.

```text
$ tar zxvf nginx-<version>.tar.gz
$ cd nginx-<version>
```

Next, get a list of the modules your server is currently using. Your list will probably be quite long.

```text
$ nginx -V
nginx version: nginx/<version>
built by gcc <version> 20150623 (Red Hat <version>) (GCC)
built with OpenSSL <version> 25 May 2017
TLS SNI support enabled
configure arguments: --prefix=/etc/nginx ... <stuff> ...
```

Take the `configure arguments` output from this command and pass it into the new configuration using the `configure` script provided with the nginx download.

```text
$ ./configure --add-module=$HOME/ngx_pagespeed-<version>-stable ... <configure arguments go here>
```

Once configured, install nginx. [Go have a duel or something](https://xkcd.com/303){:target="\_blank"}.

```text
$ make install
```

Before you touch anything else, make sure your install was successful. If it is, you're probably safe to restart nginx and load the new configuration.

```text
$ nginx -t
$ nginx restart
```

---

### <a name="configure"></a> Configuring PageSpeed

With the installation out of the way, you can move onto the fun stuff. PageSpeed offers a plethora of configuration options which can be overwhelming at first, but initial setup can be simplified immensely by using one of a few [base filters](https://modpagespeed.com/doc/config_filters#level){:target="\_blank"}:

```text
PassThrough
CoreFilters
OptimizeForBandwidth
```

`PassThrough` disables all filters and allows you to set them individually. `CoreFilters` is the default level and the one I went with. Although `OptimizeForBandwidth` supposedly provides a stronger guarantee of safety, I found that `CoreFilters` performed better in my case according to the [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights){:target="\_blank"} tool.

In order to apply a filter, you must add a line to your web server configuration (in the `server` block of `nginx.conf`, for example). The filter order does not matter since they are evaluted in the order listed in the above page of the documentation.

Don't forget to restart your web server to apply the changes. Once added, it will take a few minutes for PageSpeed to apply your optimizations, so if you are using the PageSpeed Insights tool you may not see results immediately.

### Other filters

There are a few other filters not included in the `CoreFilters` configuration that I found to be helpful for performance.

Since I am serving content via HTTPS exclusively, I added the [`MapOriginDomain`](https://modpagespeed.com/doc/domains#mapping_origin){:target="\_blank"} and [`LoadFromFile`](https://modpagespeed.com/doc/domains#LoadFromFileScriptVariables){:target="\_blank"} filters, the latter of which is nginx-specific. Please note that `LoadFromFile` is intended to be used for static sites only, as mentioned in the [risks](https://modpagespeed.com/doc/domains#risks){:target="\_blank"} section.

```text
pagespeed MapOriginDomain "http://localhost" "https://seanmcglothlin.com";
pagespeed LoadFromFile "https://seanmcglothlin.com" <path on disk to content>;
```

While navigating to my site in Chrome I sometimes experienced a very long "Resolving host..." message. To combat this, I added the [`insert_dns_prefetch`](https://modpagespeed.com/doc/filter-insert-dns-prefetch){:target="\_blank"} filter. It's hard to confirm that this filter helps because the problem was intermittent, but I haven't experienced it again since adding this option.

```text
pagespeed EnableFilters insert_dns_prefetch;
```

I found that the [`remove_comments`](https://modpagespeed.com/doc/filter-comment-remove){:target="\_blank"} and [`collapse_whitespace`](https://modpagespeed.com/doc/filter-whitespace-collapse){:target="\_blank"} filters did very little, but included them anyway so I don't send unnecessary bytes over the network.

```text
pagespeed EnableFilters remove_comments;
pagespeed EnableFilters collapse_whitespace;
```

Lastly, PageSpeed Insights warned me about blocking CSS that was preventing [above the fold](https://varvy.com/pagespeed/prioritize-visible-content.html){:target="\_blank"} content from rendering quickly. The [`prioritize_critical_css`](https://modpagespeed.com/doc/filter-prioritize-critical-css){:target="\_blank"} filter helped mitigate this. I noticed it refactor my CSS to load certain styles first and I was happy with the path it chose, but this filter is not for everyone and carries a moderate risk. See the **Risks** section for more info.

```text
pagespeed EnableFilters prioritize_critical_css;
```

---

### Results

#### Before

<figure class="image-center">
  <img src="/images/pagespeed_bad.png"/>
</figure>

#### After

<figure class="image-center">
  <img src="/images/pagespeed_good.png"/>
</figure>

<br>

I'd say the results speak for themselves!

It's worth noting that this tool isn't perfect. Even if I have a high score I'm not guaranteed a fast page render, and not all pages will score the same. My front page doesn't score perfectly because of that beautiful picture my wife took, though it still scores in the 90s on both desktop and mobile. I've also noticed the scores can fluctuate, presumably due to the module trying different optimizations behind the scenes. Perhaps it requires a certain number of hits before content can be optimized, which would explain why my site scores in the 70s or 80s when PageSpeed Insights is first run after a deployment, but numbers quickly improve on subsequent runs. In any case, there are clear benefits to using this module versus going it alone. This simple optimization tool spared me from running around the internet trying to find a bunch of separate tools that yield the same end result.

Now that I've added [Google Analytics](https://analytics.google.com){:target="\_blank"}, I can no longer get a perfect score because the cache time on analytics.js is only 2 hours. Ironically, Google is refusing to ignore their own script and have said they [won't fix the issue](https://issuetracker.google.com/issues/35352584){:target="\_blank"}. Sad!

### Was all this really necessary?

If I'm honest... no it wasn't. I have a relatively small and simple site that was already fast due to its minimalism, and few (if any) of my site's visitors would notice the best practices I'd missed. Regardless, I want my site to be as good as it can be and I value the learning process that got me to this point. Throughout that process I learned much about web development and I'm a more competent developer as a result. Next time I find one of our pages is slow at work, I'll know where to start looking.