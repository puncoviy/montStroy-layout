let scroll = new SmoothScroll('a[href*="#"]', {
    speed: 300
});

$(function(){
    $('.partners__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: '<button type="button" class="slick-next"></button>',
        prevArrow: '<button type="button" class="slick-prev"></button>',
        autoplay: true,
        responsive: [
            {
                breakpoint: 1124,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
});

const burgerBtn = document.querySelector('.burger-box');
const burgerIcon = document.querySelector('.burger-menu');
const menuList = document.querySelector('.header__menu-list');

burgerBtn.addEventListener('click', function(){
    burgerIcon.classList.toggle('active');
    menuList.classList.toggle('active');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100 && window.scrollY < 150) {
            burgerIcon.classList.remove('active');
            menuList.classList.remove('active');
        }
    })
})