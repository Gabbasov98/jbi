function teamSlider() {
    var swiper = new Swiper('.team .swiper-container', {
        slidesPerView: "auto",
        spaceBetween: 20,
        navigation: {
            nextEl: '.team .swiper-button-next',
            prevEl: '.team .swiper-button-prev',
        },
    })
}

$(document).ready(function() {

    if (window.innerWidth < 800) {
        teamSlider()
    } else {
        teamSlider = function () {

        }
    }

    $(window).resize(function() {
        if (window.innerWidth < 800) {
            teamSlider()
        } else {
            teamSlider = function () {

            }
        }
    })
})
