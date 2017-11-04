$(window).scroll(function() {

	if ($(window).scrollTop() >= ($('#header').outerHeight(true) - $('#sitemap').outerHeight(false))) {
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
	$('#header').css('height', $('#header h1').outerHeight(true) + $('#header h2').outerHeight(true) + $('#sitemap').outerHeight(true));
});

$('img').click(function() {
	var scale = $('#content').outerWidth(true) / $(this).outerWidth(true);
	if (!$(this).is(':checked')) {
		$(this).css('transform', 'scale(' + scale + ')');	
	}
});