$(document).ready(function() {


    if (window.innerWidth > 1200) {
        var nav = priorityNav.init();
    } else {
        nav = ""
    }
    if (window.innerWidth < 800) {
        $(".header .search-block input").attr("placeholder", "Поиск товаров")
    } else {
        $(".header .search-block input").attr("placeholder", "Введите название или артикул товара")
    }



    $(window).resize(function() {
        if (window.innerWidth > 1200) {
            var nav = priorityNav.init();
        } else {
            nav = ""
        }


        if (window.innerWidth < 800) {
            $(".search-block input").attr("placeholder", "Поиск товаров")
        } else {
            $(".search-block input").attr("placeholder", "Введите название или артикул товара")
        }
    })



    $(".header__catalog-btn").click(function() {
        $(this).toggleClass("header__catalog-btn--active")
        $("body").toggleClass("fixed-body")
        $(".menu").toggleClass("menu--active")
    })

    $(".header__burger").click(function() {
        $(".header-top").addClass("header-top--active")
        $("body").addClass("fixed-body")
    })

    $(".header__close").click(function() {
        $(".header-top").removeClass("header-top--active")
        $("body").removeClass("fixed-body")
    })

    $(".search-block input").keyup(function() {
        let val = $(this).val()
        toggleSearchButtons($(this), val)
    })

    $(".search-block__reset").click(function() {
        $(this).parents(".search-block").removeClass("search-block--active")
    })

    function toggleSearchButtons(el, val) {
        if (val.trim()) {
            $(el).parents(".search-block").addClass("search-block--active")
        } else {
            $(el).parents(".search-block").removeClass("search-block--active")
        }
    }

    $(".your-city__btn").click(function() {
        $(this).parents(".your-city").removeClass("your-city--active")
    })


    if (window.innerWidth > 1580) {
        setCatalogWidth()

        $(window).resize(function() {
            setCatalogWidth()
        })
    }


    function setCatalogWidth() {
        let containerWidth = $(".header-top__inner").width();
        let rightContainer = containerWidth - 460
        $(".menu__right-inner").css("width", `${rightContainer}px`)

    }


    $(".menu__category").click(function() {
        let category = $(this).attr("data-category");
        let text = $(this).find("span").html().replace(/&nbsp;/g, '');

        if (window.innerWidth > 800) {
            $(".menu__category").removeClass("menu__category--active")
            $(this).addClass("menu__category--active")

            $(".submenu").removeClass("submenu--active")
            $(`.submenu[data-category="${category}"]`).addClass("submenu--active")
        } else {

            $(".menu__left").addClass("menu__left--hide")
            $(".submenu").removeClass("submenu-mob--active")
            $(`.submenu[data-category="${category}"]`).addClass("submenu-mob--active")
            $(`.submenu[data-category="${category}"]`).find(".submenu__back-title").html(text)
        }

    })

    $(".submenu__back").click(function() {
        $(".menu__left").removeClass("menu__left--hide")
        $(".submenu").removeClass("submenu-mob--active")
    })

    $(".submenu__title").click(function() {
        let submenu = $(this).attr("data-submenu");
        let text = $(this).find("span").html().replace(/&nbsp;/g, '');

        $(this).parents(".submenu__group").find(".submenu__back2-title").html(text)
        $(this).parents(".submenu__group").find(`.submenu__items[data-submenu="${submenu}"]`).addClass("submenu__items--active")
    })

    $(".submenu__back2").click(function() {
        $(`.submenu__items`).removeClass("submenu__items--active")
    })

    $(".header__search input").on("input", function() {
        let val = $(this).val()
        if (val.length > 0) {
            $(".header-search").addClass("header-search--active")
            $("body").addClass("fixed-body")
        } else {
            $(".header-search").removeClass("header-search--active")
            $("body").removeClass("fixed-body")
        }
    })

    $(".header__search .search-block__reset").click(function() {
        $(".header-search").removeClass("header-search--active")
        $("body").removeClass("fixed-body")
    })

})