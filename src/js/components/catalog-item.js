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
})