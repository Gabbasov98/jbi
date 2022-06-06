function projectGallery() {
    var swiper = new Swiper(".project-gallery .mySwiper", {
        slidesPerView: "auto",
        freeMode: true,
        watchSlidesProgress: true,
        breakpoints: {
            320: {
                spaceBetween: 10
            },
            800: {
                spaceBetween: 15
            },
            1500: {
                spaceBetween: 20,
            },
        }
    });
    var swiper2 = new Swiper(".project-gallery .mySwiper2", {
        spaceBetween: 10,
        navigation: {
            nextEl: ".project-gallery .swiper-button-next",
            prevEl: ".project-gallery .swiper-button-prev",
        },
        thumbs: {
            swiper: swiper,
        },
    });
}


$(document).ready(function() {
    projectGallery()

    $(".project__more").click(function() {
        let parent = $(this).parents(".project")
        $(parent).find(".project__items").removeClass("project__items--hide")
        $(this).hide()
    })


    showHideProjectButton()



    function showHideProjectButton() {

        $(".project").each(function(index, el) {
            if (window.innerWidth > 1500 || (window.innerWidth > 600 && window.innerWidth < 800)) {
                if (calcProjects(el) > 3) {
                    $(el).find(".project__more").show()
                } else {
                    $(el).find(".project__more").hide()
                }
            } else if (window.innerWidth > 1200 || window.innerWidth < 600) {
                if (calcProjects(el) > 2) {
                    $(el).find(".project__more").show()
                } else {
                    $(el).find(".project__more").hide()
                }
            } else if (window.innerWidth > 1000) {
                if (calcProjects(el) > 5) {
                    $(el).find(".project__more").show()
                } else {
                    $(el).find(".project__more").hide()
                }
            } else if (window.innerWidth > 800) {
                if (calcProjects(el) > 4) {
                    $(el).find(".project__more").show()
                } else {
                    $(el).find(".project__more").hide()
                }
            }

        });

    }


    function calcProjects(el) {
        return $(el).find(".project__item").length
    }
})