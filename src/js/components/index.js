function doneSlider() {
    var swiper = new Swiper('.done-projects .swiper-container', {
        slidesPerView: "auto",
        spaceBetween: 20,
        navigation: {
            nextEl: '.done-projects .swiper-button-next',
            prevEl: '.done-projects .swiper-button-prev',
        },
    })
}

function newsSlider() {
    var swiper = new Swiper('.index-news .swiper-container', {
        slidesPerView: "auto",
        spaceBetween: 20,
        navigation: {
            nextEl: '.index-news .swiper-button-next',
            prevEl: '.index-news .swiper-button-prev',
        },
    })
}

$(document).ready(function() {

    if (window.innerWidth < 800) {
        doneSlider()
        newsSlider()
    }

    $(window).resize(function() {
        if (window.innerWidth < 800) {
            doneSlider()
            newsSlider()
        }
    })

})