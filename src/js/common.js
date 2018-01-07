$(function() {

    //WELCOME-CAROUSEL

	$('#welcomeCarousel').slick({
        autoplay: true,
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 544,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    });

    //ABOUT US CAROUSEL

	$('#aboutCarousel').slick({
        autoplay: true,
        arrows: true,
        infinite: true,
        slidesToShow: 5,
        variableWidth: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    //PROJECT CAROUSEL

    $('#projectCarousel').slick({
        autoplay: true,
        arrows: false,
        dots: true,
        infinite: true
    });


    //BLOCKQUOTE CAROUSEL

    $('.blockquote-carousel').slick({
        swipe: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.blockquote-thumb-nav'
    });
    $('.blockquote-thumb-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.blockquote-carousel',
        centerMode: true,
        focusOnSelect: true,
        variableWidth: true,
        initialSlide: 1
    });

    //TESTIMONIALS CAROUSEL
    $('.testimonials-carousel').slick({
        swipe: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.testimonials-thumb-nav'
    });
    $('.testimonials-thumb-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.testimonials-carousel',
        centerMode: true,
        focusOnSelect: true,
        variableWidth: true,
        initialSlide: 1
    });


    //END CAROUSELS


	//Bootstrap dropdown on hover

    $('.dropdown').hover(function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
    }, function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
    });


    //FAQ accordion

    var faqItem = $('.faq-item');

    faqItem.on('show.bs.collapse', function () {
        $(this).find('i').addClass('fa-minus')
    });
    faqItem.on('hide.bs.collapse', function () {
        $(this).find('i').removeClass('fa-minus')
    });

    //MASONRY

    $('.blog-gallery').masonry({
        itemSelector: '.blog-item'
    });


    //DEADLINK

    $('a[href="#"], button').on('click', function (event) {
        event.preventDefault();
    })

});
