$(document).ready(function() {
    $('input[type="tel"]').mask('+7 999 9999999', { autoclear: false }, { placeholder: '+7            ' });


    // $('.gallery-group').magnificPopup({
    //     delegate: 'a',
    //     type: 'image'
    // });

    $('.popup-youtube, .popup-video, .popup-maps').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        preloader: true,
    });



    $('.gallery-group').each(function() { // the containers for all your galleries
        $(this).magnificPopup({
            delegate: 'a', // the selector for gallery item
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    });

    cartCalc()


    $(".form-group input").each(function(index, el) {
        InputIsFilled($(el))
    });

    $(".form-group textarea").each(function(index, el) {
        InputIsFilled($(el))
    });

    $(".form-group input").change(function() {
        InputIsFilled($(this))
    })

    $(".form-group textarea").change(function() {
        InputIsFilled($(this))
    })


    $(".file-input input").each(function(index, el) {
        dragFile($(this))
    })


    $(".custom-select input").click(function() {
        $(this).parents(".custom-select").addClass("custom-select--active")
    })

    $(".custom-select").each(function(index, el) {
        setSelect($(el))
    });

    $(".custom-select__item").click(function() {
        $(this).siblings(".custom-select__item").removeClass("custom-select__item--selected")
        $(this).addClass("custom-select__item--selected")

        setSelect($(this).parents(".custom-select"))
    })

    $(document).mouseup(function(e) {
        var div = $('.custom-select__dropdown');
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            if ($(div).parents(".custom-select").hasClass("custom-select--active")) {
                $(div).parents(".custom-select").removeClass("custom-select--active")
            }
        }
    });

    $(".tab").click(function() {
        let parent = $(this).parents(".tab-parent")
        let path = $(this).attr("data-tabs-path")
        $(parent).find(".tab").removeClass("tab--active")
        $(this).addClass("tab--active")

        $(parent).find(".tabs-content").removeClass("tabs-content--active")
        $(parent).find(`.tabs-content[data-tabs-path="${path}"]`).addClass("tabs-content--active")
    })


    $(".cookies__btn").click(function() {
        $(this).parents(".cookies").remove()
    })
});

function setSelect(el) {
    let selected = $(el).find(".custom-select__item--selected").html()
    let input = $(el).children("input")
    $(input).val(selected)
    $(el).removeClass("custom-select--active")
}

function dragFile(dropZone) {

    dropZone.on('dragenter focus click', function() {
        dropZone.addClass('is-active');
    });

    dropZone.on('dragleave blur drop', function() {
        dropZone.removeClass('is-active');
    });
}

function InputIsFilled(el) {
    if ($(el).val()) {
        $(el).addClass("input-active")
    } else {
        $(el).removeClass("input-active")
    }
}

function cartCalc() {
    $('.cartcalc .ccalc-minus').click(function() {
        let a = $(this).closest('.cartcalc').find('input').val();
        if (a > 1) {
            let b = +a - 1;
            $(this).closest('.cartcalc').find('input').val(b);
        } else {
            $(this).closest('.cartcalc').find('input').val(a);
        }
    });
    $('.cartcalc .ccalc-plus').click(function() {
        let a = $(this).closest('.cartcalc').find('input').val();
        let b = +a + 1;
        $(this).closest('.cartcalc').find('input').val(b);
    });
}