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
    let mobiMenu = $('#header-link');
    let body = $('body');

// ПОЯВЛЕНИЕ И ИСЧЕЗНОВЕРИЕ МЕНЮ
    
    mobiMenu.fadeToggle(300, function(){
        if ( $(this).css('display') === 'none' ) {
            $(this).removeAttr('style');
        }
    });

// ОТКЛЮЧЕНИЕ СКРОЛЛА

    body.toggleClass('scroll-off');

// АНИМАЦИЯ БУРГЕР КНОПКИ 

    let lineOne = $('#lineOne');
    let lineTwo = $('#lineTwo');
    let lineThree = $('#lineThree');
    

    lineOne.toggleClass('animate-active');

    lineTwo.toggle(100, function(){
        if ( $(this).css('display') === 'block' ) {
            $(this).removeAttr('style');
        }
    });

    lineThree.toggleClass('animate-active-stock');

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

let btn = document.querySelector('.arrow-top')

function magic() {
  if (window.pageYOffset > 400) {
    btn.style.opacity = '1'
  } else { btn.style.opacity = '0' }
}
btn.onclick = function () {
	window.scrollTo(0,0)
}
window.onscroll = magic


});