Title: Sean McGlothlin
Subtitle: About
Slug: about
Author: Sean McGlothlin
Alias: /pages/about.html

## About Me

<figure class="image-right">
  <img src="/images/sean.jpg"/>
  <figcaption>Me in my hometown of <a href="http://www.travelgrantspass.com/" target="\_blank">Grants Pass</a>, Oregon.
  </figcaption>
</figure>

If you want to learn more about what I do professionally, you can find me on [GitHub](https://github.com/McGlothlin){:target="\_blank"}, [LinkedIn](https://www.linkedin.com/in/smcglothlin){:target="\_blank"}, and [Stack Overflow](https://stackoverflow.com/users/5472966/mcglothlin){:target="\_blank"}. Please feel free to [contact me](/contact) if you would like to chat!

I am a classically trained musician who started learning the violin in elementary school and played in orchestras until I graduated high school. I've also given violin and viola lessons for a short time. Though I still know how to play both of these shoulder-mounted instruments, my true passion is for the bass guitar. I am self taught on the bass, learning primarily through YouTube tutorials and lots of practice. I play all sorts of music ranging from jazz to metal depending on who I'm with and what mood I'm in. My favorite band is Dream Theater, probably because I enjoy their turbulent time signatures.

I've always been into cars, but I've finally entered a stage in my life where I feel I'm able to fully appreciate them. I currently own a 2016 Subaru WRX and a 1994 Mazda Miata which I plan to keep for a while and upgrade over time. You can often find me at [Portland Cars and Coffee](http://www.portlandcarsandcoffee.com){:target="\_blank"}, and even the occasional autocross course or go-kart track. I'm always trying to improve my skills as a driver; I think it's one of the best life skills a person can have since we spend so much of our time behind the wheel.

------------------

## About This Site

This site was written with the help of [Pelican](https://blog.getpelican.com){:target="\_blank"}, a static site generator. The theme is responsive, scaling nicely on all screen sizes. I wrote the theme from scratch using CSS and a dash of jQuery for the [scrolling navigation bar](/blog/code/navbar).

### Why Pelican?

Pelican uses [Jinja2](http://jinja.pocoo.org){:target="\_blank"}, a template engine for Python, to eliminate the need for the tedious writing of HTML pages tag by tag. This gives the site a consistent structure with a simple [DOM](https://www.w3.org/TR/DOM-Level-2-Core/introduction.html){:target="\_blank"} and is less error prone. In the past I developed websites using a full-blown Content Management System (CMS), but I found most CMSes to be needlessly complex for my use case. For those who don't know, a CMS is a web application that comes with its own database and front end templates built in, so users can focus on writing content rather than spending time on the technical details and layout of the site. This is an excellent system in an enterprise environment, especially when content editors are not developers.

### So, static sites are faster?

Yes, they're screaming fast. Since the web server only has to serve static content that was pre-built, static sites scale phenomenally well and return content in an instant. A CMS uses copious caching to prevent database hits every time a page request is made, but this is an additional layer of complexity that still takes more time to serve up than pure static content.

### What's this about security?

Since a CMS has a public-facing database, it is prone to security vulnerabilities. There have been critical bugs that leave CMS sites compromised within mere hours if they are not patched immediately after the bug was reported. Pelican does not have this problem, since it is really just a Python module that runs on my computer.

### Why plaid?

Visitors with larger screens will notice a plaid background across the site. Anyone who knows me will attest to how much I like plaid. I couldn't tell you why; it's just "fun", as my wife would say. I had fun making my favorite plaid pattern using CSS3.

--------------------

### More Information

- [Click here](https://github.com/McGlothlin/pelican-site){:target="\_blank"} for this site's source code.
- Check out [this article](/blog/code/pagespeed) I wrote to learn about some of the optimizations I've done.