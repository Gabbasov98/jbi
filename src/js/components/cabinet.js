$(".order-card__toggle").click(function () {
    $(this).toggleClass("order-card__toggle--active")
    $(this).parents(".order-card").find(".order-card__hidden").slideToggle()
})
