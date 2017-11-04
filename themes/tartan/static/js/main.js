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
    if($('figure input').is(':checked')) {
        $('figure input').click();
    }
});

$(window).resize(function() {
    $('#header').css('height', $('#header h1').outerHeight(true) + $('#header h2').outerHeight(true) + $('#sitemap').outerHeight(true));
    if($('figure input').is(':checked')) {
        $('figure input').click();
    }
});

$('img').click(function() {
    // Grab the widths but don't round
    var mainwidth = $('#main')[0].getBoundingClientRect().width;
    var contentwidth = $('#content')[0].getBoundingClientRect().width;
    var scale = (mainwidth / contentwidth).toPrecision(21);

    if (!$('figure input').is(':checked') && $('figure').hasClass('image-center')) {
        $(this).css('transform', 'scale(' + scale + ')');
    }
    else if (!$('figure input').is(':checked') && $('figure').hasClass('image-right')) {
        $(this).css('transform', 'scale(' + scale * 1.5 + ')');
        $(this).css('transform-origin', 'right');
    }
});

$(document).click(function(event) {
    var container = $('figure input');
    if(!$(event.target).closest('img').length) {
        if(container.is(':checked')) {
            container.click();
        }
    }
});