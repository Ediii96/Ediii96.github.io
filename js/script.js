$(function(){

// ФОРМА ЗАКАЗА ЗВОНКА 

// ОТКРЫТЬ ФОРМУ ПО НАЖАТИЮ НА КНОПКУ "ЗАКАЗАТЬ ЗВОНОК" / ЗНАЧОК ТЕЛЕФОННОЙ ТРУБКИ

let cellButton = $('#cell-button');
let cellButtonMob = $('#cell-button-mob');
let footerCellButton = $('#footer-cell-button');
let popUp = $('#pop-up');

cellButton.on('click', function(){

    popUp.fadeIn(500).css( 'display', 'flex' );

});

cellButtonMob.on('click', function(){

    popUp.fadeIn(500).css( 'display', 'flex' );

});

footerCellButton.on('click', function(){

    popUp.fadeIn(500).css( 'display', 'flex' );

});

// ЗАКРЫТЬ ФОРМУ ПО НАЖАТИЮ НА КРЕСТИК ИЛИ В ДРУГОМ МЕСТЕ ЭКРАНА ВНЕ БЛОКА

let cross = $('#cross');

cross.on('click', function(){

    popUp.css( 'display', 'none' );

});

$(document).mouseup(function (e){ 
    let formContainer = $('#form-container');
    if (!formContainer.is(e.target) && formContainer.has(e.target).length === 0) { 
        popUp.css( 'display', 'none' );
    }
});

// ОТКРЫТЬ БУРГЕР МЕНЮ ПО НАЖАТИЮ НА БУРГЕР КНОПКУ

$('#header-button').on('click', function(){
    let mobiMenu = $('#header-menu');
    let body = $('body');

// ПОЯВЛЕНИЕ И ИСЧЕЗНОВЕРИЕ МЕНЮ
    if( mobiMenu.css('display') == 'none' ){
        mobiMenu.css('display', 'block');
    }
    else{
        mobiMenu.css('display', 'none');
    }

// АНИМАЦИЯ БУРГЕР МЕНЮ

    $(this).toggleClass('animate');
    

// ОТКЛЮЧЕНИЕ СКРОЛЛА
    body.toggleClass('scroll-off');

});

// ВКЛЮЧЕНИЕ СКРОЛЛА ПРИ НАЖАТИИ НА ОДНУ ИЗ ССЫЛОК ИЗ БУРГЕР МЕНЮ В МОБИЛЬНОЙ ВЕРСИИ САЙТА
$(window).on('resize', function(event){
    let windowSize = $(window).width(); 
    let mobiMenu = $('#header-menu');
    let headerLink = $('#header-menu').find('.header-nav__link');

    if(windowSize < 1024){
        headerLink.on('click', function() { 

// ПОЯВЛЕНИЕ И ИСЧЕЗНОВЕРИЕ МЕНЮ
            if( mobiMenu.css('display') == 'block' ){
                mobiMenu.css('display', 'none');
            }
// ПОСТАВИТЬ АНИМАЦИЮ БУРГЕР КНОПКИ В НАЧАЛЬНОЕ ПОЛОЖЕНИЕ

            $('#header-button').removeClass('animate');      

// ВКЛЮЧЕНИЕ СКРОЛЛА
            $('body').removeClass('scroll-off');
        });
    }
});



// ПЛАВНЫЙ СКРОЛЛ ПО "ЯКОРЯМ"

let $page = $('html, body');
$('a[href*="#"]').click(function() {

    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;

});

// ПОЯВЛЕНИЕ КНОПКИ "ВВЕРХ" ПРИ ПРОКРУТКИ СТРАНИЦЫ

let btn = document.querySelector('.arrow-top');

function magic() {
  if (window.pageYOffset > 400) {
    btn.style.opacity = '1'
  } else { btn.style.opacity = '0' }
}
btn.onclick = function () {
	window.scrollTo(0,0)
};

window.onscroll = magic;

});

// СЛАЙДЕР

let slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
    showSlides(slideIndex += n);
}


function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}

    for (i=0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i=0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active1", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active1";

}

setInterval(function(){
    document.getElementById("next").click(function(){
        plusSlides(slideIndex+1);
    });
}, 6000);

    

