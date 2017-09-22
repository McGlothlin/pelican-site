$(window).scroll(function() {
	if ($(window).scrollTop() >= $('header').outerHeight(true)) {
		$('sitemap').addClass('scrolling-sitemap');
	}
	else {
		$('sitemap').removeClass('scrolling-sitemap');
	}
});