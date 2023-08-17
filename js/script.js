$(document).ready(function(){
    $('.carousel__slider').slick({
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.png"></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false
                }
            }
        ]
});
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click',function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        })
    };

    toggleSlide('a.catalog-item__link');
    toggleSlide('a.catalog-item__back');

    $('[data-modal = consultation]').on('click',function(){
        $('.overlay, #consultation').fadeIn();
    });

    $('.button_item').on('click',function(){
        $('.overlay, #order').fadeIn();
    });

    // $('[data-modal = buy]').on('click',function(){
    //     $('#order').fadeOut();
    //     $('#thanks').fadeIn();
    // });

    $('.modal__close').on('click',function(){
        $('.overlay, #consultation, #order, #thanks').fadeOut();
    });

    $('.button_item').each(function(i) {
        $(this).on('click', function(){
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text())
        });
    }); 

    $('form').submit(function(e){
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function(){
            $(this).find("input").val("");



            $('form').trigger('reset');
        });
        return false;
    });


    $(window).scroll(function(){
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });
    
    new WOW().init();
});
  