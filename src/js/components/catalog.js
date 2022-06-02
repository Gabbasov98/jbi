$(document).ready(function() {

    $(".categories__item-show").click(function() {
        console.log(true);
        $(this).siblings(".categories__item-hidden").slideToggle()
    })

    $(".popular-category__btn").click(function() {
        $(this).toggleClass("popular-category__btn--active")

        $(this).parents(".popular-category").find(".popular-category__item--hidden").toggleClass("popular-category__item--show")
    })

})