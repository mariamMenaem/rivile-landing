$('#nav-menu').css('max-height', '0px')
$('.menu-icon').click(function () {
    if ($('#nav-menu').css('max-height') == '0px') {
        $('#nav-menu').css('max-height', '200px');
    }else{
        $('#nav-menu').css('max-height', '0px')
    }
})

$('#subscribe-btn').click(function (e) {
    e.preventDefault();
    $('#myModal').fadeIn();
})

$('.close').click(function () {
    $('#myModal').fadeOut();
})

$(window).scroll(function () {
    sc = $(this).scrollTop();
    if (sc > 800) {
        $('.scrolltop').fadeIn();
    } else {
        $(".scrolltop").fadeOut();
    }
})

$('.scrolltop').click(function () {
    $('body , html').animate({
        scrollTop: 0
    }, 500)
})

$('#nav-menu a').click(function () {
    $('body , html').animate({
        scrollTop: $($(this).attr('href')).offset().top - 20
    })
})

$('.small-img-row img').each(function () {
    $(this).click(function () {
        $('#service-img').attr('src', $(this).attr('src'))
    })
})

$('.site-accordion').each(function () {
    $(this).click(function () {
        $(this).toggleClass('active')
        panel = $(this).next();
        if(panel.css('display') == 'block'){
            panel.slideUp()
        }else{
            panel.slideDown()
        }
    })
})

