function gallery() {
    var swiper = new Swiper(".gallery .mySwiper", {
        spaceBetween: 10,
        slidesPerView: "auto",
        freeMode: true,
        watchSlidesProgress: true,
        breakpoints: {
            320: {
                direction: "horizontal"
            },
            800: {
                direction: "vertical"
            },
            1200: {
                direction: "horizontal"
            },
        }
    });
    var swiper2 = new Swiper(".gallery .mySwiper2", {
        spaceBetween: 10,
        thumbs: {
            swiper: swiper,
        },
    });
}

function collectionSlider() {
    var swiper = new Swiper('.collection .swiper-container', {
        slidesPerView: 4,
        spaceBetween: 20,

        navigation: {
            nextEl: '.collection .swiper-button-next',
            prevEl: '.collection .swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            360: {
                slidesPerView: "auto",
            },
            1200: {
                slidesPerView: 3,
                loop: true,
            },
            1400: {
                slidesPerView: 4,
            },
        }
    })
}

$(document).ready(function() {

    gallery()
    collectionSlider()

    $(".catalog-desc__text-show").click(function() {
        $(this).hide()
        $(".catalog-desc__text").addClass("catalog-desc__text--show")
    })

    $(".catalog-nav__hint-question").click(function() {
        $(this).toggleClass("catalog-nav__hint-question--active")
    })

    $(document).mouseup(function(e) {
        var div = $('.catalog-nav__hint-tooltip');
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            if ($(".catalog-nav__hint-question").hasClass("catalog-nav__hint-question--active")) {
                $(".catalog-nav__hint-question").removeClass("catalog-nav__hint-question--active")
            }
        }
    });


    // let navPosition = document.querySelector(".catalog-nav").getBoundingClientRect()
    if ($(".catalog-nav")) {
        let navPosition = $(".catalog-nav").offset()
        let scrolltop = $("body,html").scrollTop()
        showPriceFooter()

        $(window).scroll(function() {
            scrolltop = $("body,html").scrollTop()
            showPriceFooter()
        })

        function showPriceFooter() {
            if (navPosition) {
                if (scrolltop > navPosition.top) {
                    $(".price-footer").addClass("price-footer--active")
                } else {
                    $(".price-footer").removeClass("price-footer--active")
                }
            }

        }
    }


})