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
    
    shrinkImage();
});

$('img').click(function() {

    // Grab the widths but don't round
    var mainwidth = $('#main')[0].getBoundingClientRect().width;
    var contentwidth = $('#content')[0].getBoundingClientRect().width;
    var scale = (mainwidth / contentwidth).toPrecision(21);

    if (!$('figure input').is(':checked') && $('figure').hasClass('image-center')) {
        $(this).css('transform', 'scale(' + scale + ')');
        $('#overlay').show();
    }

    else if (!$('figure input').is(':checked') && $('figure').hasClass('image-right')) {
        $(this).css('transform', 'scale(' + scale * 1.5 + ')');
        $(this).css('transform-origin', 'right');
        $('#overlay').show();
    }

    if($('figure input').is(':checked')) {
        $('#overlay').hide();
    }

});

$(document).click(function(event) {

    if (!$(event.target).closest('img').length && $('figure input').is(':checked')) {
        shrinkImage();
    }

});

function shrinkImage() {
    $('figure input').each(function() {
        if($(this).is(':checked')) {
            $(this).click();
        }
    });

    if (!$('figure input').is(':checked')) {
        $('#overlay').hide();
    }
}