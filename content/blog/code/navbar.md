Title: Scrolling Navigation Bar
Subtitle: A tutorial on my implementation
Date: 2017-09-29
Slug: blog/code/navbar
Category: code
Tags: Code
Author: Sean McGlothlin
Alias: /code/navbar.html

Although I really like the look of my site, I'm always trying to think of more things I can do to improve the look and feel. I often browse the web looking for inspiration from beautiful sites designed by those more experienced than me. Some of my favorite things to look at are shadows, typography, colors, page layout, and responsiveness.

Recently I've noticed a trend where developers will fix the navigation bar to the top of the page so it scrolls down when you do. While I like the scrolling aspect, I never could come up with a design for my own site that placed the navbar at this location and left me satisifed with the look and feel. I wanted to do something a little different than everyone else.

Last week I stumbled upon [this code snippet](https://codepen.io/JGallardo/pen/lJoyk){:target="\_blank"} which gave me that "aha!" moment I had been looking for. While my theme had been written entirely in CSS up until this point, it was time to bust out some JavaScript/jQuery chops to make this work. Below is a look under the hood at what I'm doing.

---

First, the HTML for the entire header. I'm using Pelican to generate some of this structure, so that's why you don't see "Home", "About", etc. links in here.

```html
<div id="header">
  <h1 class="center">{% block pagetitle %}{% endblock %}</h1>
  <h2 class="center">{% block subtitle %}{% endblock %}</h2>
  <ul id="sitemap">
    {% for title, link in MENUITEMS %}
        <li><a href="{{ link }}">{{ title }}</a></li>
    {% endfor %}
  </ul>
</div>
```

Here's the CSS for my navbar. I called it the "sitemap" because naming things is one of the [hardest problems in computer science](https://twitter.com/codinghorror/status/506010907021828096?lang=en){:target="\_blank"}.

```css
/* Header Bar */
#sitemap {
  padding:0;
  margin:0;
  overflow: hidden;
  background-color: #1A5276;
  text-align: center;
  font-size: 1.1em;
  display: flex;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12), 0 3px 1px -2px rgba(0,0,0,.2);
}

/* Class assigned by jQuery function*/
.scrolling-sitemap {
  position: fixed;
  top: 0;
  width: 80%; /* 100% - body margin percentage */
  margin: 0;
}
```


And now for the jQuery to tie it all together.

```javascript
$(window).scroll(function() {
	if ($(window).scrollTop() >= ($('#header').outerHeight(true)
		- $('#sitemap').outerHeight(false))) {
		height = $('#header').outerHeight(true);
		$('#sitemap').addClass('scrolling-sitemap');
		$('#header').css('height', height);
	}
	else {
		$('#sitemap').removeClass('scrolling-sitemap');
		$('#header').css('margin-bottom', 0);
	}
});

$(window).resize(function() {
	$('#header').css('height', $('#header h1').outerHeight(true)
	+ $('#header h2').outerHeight(true) + $('#sitemap').outerHeight(true));
});
```

---

So, what exactly is happening here? First, I styled the `#sitemap` to look pretty on the page. Next, I created a class called `.scrolling-sitemap` that is dynamically applied via jQuery when a user scrolls below the top of the `#sitemap`, and removed when the user scrolls above the height where the `#sitemap` sits by default. I also had to adjust the height accounting for the fact that the `#sitemap` element has moved. This provides a smooth transition and prevents items below from violently jumping up to take up that newly freed space.

Once the `.scrolling-sitemap` class is applied, I had to set the width to match my existing margins. The 80% width is the precentage of the page that is not filled with glorious plaid, and is adjusted accordingly in a few media queries.

We're not quite done, though. That little `$(window).resize` function at the bottom recalculates the height of the header to account for the fact that you can resize the window any time you like, and the height of the header is not a fixed value. If you were to resize the window without this function, elements below the header could overlap, or you could be left with excessive whitespace between the header and content area.

At the end of the day, it's a pretty simple solution and extremely helpful from a usability standpoint. I enjoy not having to scroll to the top of the page after reading a long article, especially on mobile.