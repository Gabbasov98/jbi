$(document).ready(function() {

    $(".estimate-card__delete").click(function() {
        let parent = $(this).parents(".estimate-card")
        deleteEstimate(parent)
    })

    $(".estimate__delete").click(function() {
        $(".estimate__check input").each(function(index, el) {
            let checked = $(el).prop("checked")

            if (checked) {
                deleteEstimate($(el).parents(".estimate-card"))
            } else {
                return
            }
        });
    })


    function deleteEstimate(el) {
        $(el).addClass("estimate-card--delete")


        let secs = 3
        $(el).find(".estimate-card__sec").html(
            `3 секунды`
        )
        let secondsInterval = setInterval(() => {
            if (secs === 1) {
                clearInterval(secondsInterval)
                $(el).remove()
            }
            secs--
            let text = (secs === 1) ? `${secs} секунду` : `${secs} секунды`

            $(el).find(".estimate-card__sec").html(
                text
            )

        }, 1000);


        $(el).find(".estimate-card__delete-btn").click(function() {
            clearInterval(secondsInterval)
            $(el).removeClass("estimate-card--delete")
        })

    }


    $(".estimate__check input").change(function() {
        if (checkInputTrue()) {
            $(".estimate__all input").prop("checked", true)
        } else {
            $(".estimate__all input").prop("checked", false)
        }
    })

    $(".estimate__all input").change(function() {
        let checked = $(this).prop("checked")

        if (checked) {
            $(".estimate__check input").each(function(index, el) {
                $(el).prop("checked", true)
            });
        } else {
            $(".estimate__check input").each(function(index, el) {
                $(el).prop("checked", false)
            });
        }

    })


    function checkInputTrue() {
        let checkArray = []
        $(".estimate__check input").each(function(index, el) {
            checkArray.push($(el).prop("checked"))
        });

        if (checkArray.indexOf(false) === -1) {
            return true
        }
        return false


    }


    $(".estimate__search input").on("input", function() {
        let val = $(this).val()
        if (val.length > 0) {
            $(".estimate__search-results").addClass("estimate__search-results--active")
        } else {
            $(".estimate__search-results").removeClass("estimate__search-results--active")
        }
    })

    $(".estimate__search  .search-block__reset").click(function() {
        $(".estimate__search-results").removeClass("estimate__search-results--active")
    })

    $(document).mouseup(function(e) {
        var div = $('.estimate__search ');
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            if ($(".estimate__search-results").hasClass("estimate__search-results--active")) {
                $(".estimate__search-results").removeClass("estimate__search-results--active")
            }
        }
    });


    $("input[name='delivery']").change(function() {
        let deliveryType = +$(this).attr("data-delivery")
        console.log(deliveryType);
        if (deliveryType === 2) {
            $(".order__delivery-input").hide()
            $(".order-info__hint--delivery").hide()
            $(".order-info__hint--self").show()
            $(".order-info__min").show()
        } else {
            $(".order__delivery-input").show()
            $(".order-info__hint--delivery").show()
            $(".order-info__hint--self").hide()
            $(".order-info__min").hide()
        }
    })

    $(".order__comment").click(function() {
        $(this).hide()
        $(".order__comment-hidden").show()
    })

})