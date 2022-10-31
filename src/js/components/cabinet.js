$(".order-card__toggle").click(function () {
    $(this).toggleClass("order-card__toggle--active")
    $(this).parents(".order-card").find(".order-card__hidden").slideToggle()
})

$(".doc-card__check input").change(function () {
    let checkedInputNum = $(".doc-card__check input:checked").length
    $(".doc-selected__num").html(checkedInputNum)
    if(checkedInputNum > 0){
        $(".doc-selected").addClass("doc-selected--active")
    } else{
        $(".doc-selected").removeClass("doc-selected--active")
    }
})

$("._close-doc-popup").click(function () {
    $(".doc-selected").removeClass("doc-selected--active")

    $(".doc-card__check input").each(function (index, el){
        $(el).prop("checked",false)
    });
})
