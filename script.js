$(function() {
    var pageTopBtn = $('.pageTop');
    pageTopBtn.hide();
    $(window).scroll(function ()
    {
        if ($(this).scrollTop() > 100) {
            pageTopBtn.fadeIn();
        } else {
            pageTopBtn.fadeOut();
        }
    });

    pageTopBtn.click(function ()
    {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;        
    });
});
