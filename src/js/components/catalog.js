$(document).ready(function() {

    $(".categories__item-show").click(function() {
        console.log(true);
        $(this).siblings(".categories__item-hidden").slideToggle()
    })

    $(".popular-category__btn").click(function() {
        $(this).toggleClass("popular-category__btn--active")

        $(this).parents(".popular-category").find(".popular-category__item--hidden").toggleClass("popular-category__item--show")
    })

    $(".filter__show").click(function() {
        if (window.innerWidth < 1200) { return }
        $(this).toggleClass("filter__show--active")
        $(this).siblings(".filter__hidden").slideToggle()
    })

    $(".filter__more").click(function() {
        let filterName = $(this).siblings(".filter__subtitle").html()
        $(this).parents(".filter__group").addClass("filter__group--active")

        $(".filter__mob").addClass("filter__mob--sub")
        $(".filter__mob2 .filter__mob-title").html(filterName)
    })

    $(".filter__mob-back").click(function() {
        $(".filter__mob").removeClass("filter__mob--sub")
        $(".filter__group").removeClass("filter__group--active")
    })

    $(".sort__btn").click(function() {
        $(this).toggleClass("sort__btn--reverse")
        $(".sort__btn").removeClass("sort__btn--active")
        $(this).addClass("sort__btn--active")
    })

    $(".filter__mob-close").click(function() {
        $(".filter").removeClass("filter--active")
    })

    $(".filter__bg").click(function() {
        $(".filter").removeClass("filter--active")
    })

    $(".mobs-filter__btn").click(function() {
        $(".filter").addClass("filter--active")
    })

    $(".tag button").click(function() {
        $(this).parent(".tag").remove()
        let tagsNum = $(".tag").length
        console.log(tagsNum);
        if (tagsNum === 1) {
            $(".tag--clear").remove()
        }
        if ($(this).parent(".tag").hasClass("tag--clear")) {
            $(".tags").hide()
        }
    })

})