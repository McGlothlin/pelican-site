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

    shrinkImages();
});


$(window).resize(function() {
    $('#header').css('height', $('#header h1').outerHeight(true) + $('#header h2').outerHeight(true) + $('#sitemap').outerHeight(true));
    
    shrinkImages();
});


$('img').click(function() {

    // Grab the widths but don't round
    var mainwidth = $('#main')[0].getBoundingClientRect().width;
    var contentwidth = $('#content')[0].getBoundingClientRect().width;
    var scale = (mainwidth / contentwidth).toPrecision(21);

    if ($(this).css('cursor') === 'zoom-in') {
        $(this).css('position', 'relative');
        $(this).css('cursor', 'zoom-out');
        $(this).css('box-shadow', '0px 3px 11px rgba(0, 0, 0, 0.5)');
        $('#overlay').show();

        if ($('figure').hasClass('image-center')) {
            $(this).css('transform', 'scale(' + scale + ')');
        }
        else {
            $(this).css('transform', 'scale(' + scale * 1.5 + ')');
            $(this).css('transform-origin', 'right');
        }
    }
    else {
        shrinkImages();
    }

});


$(document).click(function(event) {

    if (!$(event.target).closest('img').length) {
        shrinkImages();
    }

});


function shrinkImages() {
    $('img').each(function() {
        $(this).css('transform', 'none');
        $(this).css('cursor', 'zoom-in');
        $(this).css('position', 'static');
        $(this).css('box-shadow', '');
    });

    $('#overlay').hide();
}
