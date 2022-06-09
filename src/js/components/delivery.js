function requisitSlider() {
    var swiper = new Swiper('.requisit .swiper-container', {
        slidesPerView: "auto",
        spaceBetween: 20,
        navigation: {
            nextEl: '.requisit .swiper-button-next',
            prevEl: '.requisit .swiper-button-prev',
        },
    })
}

$(document).ready(function() {



    if (window.innerWidth < 800) {
        requisitSlider()
    } else {
        requisitSlider = ''
    }

    $(window).resize(function() {
        if (window.innerWidth < 800) {
            requisitSlider()
        } else {
            requisitSlider = ''
        }
    })

    $(".qa-card__show").click(function() {
        $(this).parents(".qa-card").toggleClass("qa-card--active")
        $(this).parents(".qa-card").find(".qa-card__hidden").slideToggle()
    })

})