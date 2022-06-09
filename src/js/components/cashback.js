$(document).ready(function() {

    $(".cashback__tab-more").click(function() {
        $(".cashback__tabs").removeClass("cashback__tabs--hide")
        $(this).hide()
    })

    let numsNode = $(".prize__nums")
    let num = $(numsNode).attr("data-num")
    if (num) {

    }

    let animateTo = +num

    if (num) {
        initPrizeNums()
    }




    function initPrizeNums() {
        let digitNum = num.length
        let stringToNum = num => Number(num);
        let intNumsArray = Array.from(String(animateTo), stringToNum);

        for (let i = 0; i < digitNum; i++) {
            console.log(true);
            let nulNum = `
            <div class="prize__num">
                <span>${intNumsArray[i]}</span>
            </div>
            `

            $(numsNode).append(nulNum)
        }

    }



})