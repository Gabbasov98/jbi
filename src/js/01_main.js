$(document).ready(function() {
    $('input[type="tel"]').mask('+7 999 9999999', { autoclear: false }, { placeholder: '+7            ' });

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




});


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