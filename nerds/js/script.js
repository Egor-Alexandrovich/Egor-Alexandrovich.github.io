$('.wrap_slider .owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    dots:true,
    navText: [],
    responsive:{
        0:{
            items:1,
            nav:false
        },
        480:{
            items:1,
            nav:false
        },
        960:{
            items:1
        },
    }
})

var $checkbox = document.getElementById('checkbox')
var $cart =document.getElementById('cart')
var $menu =document.getElementById('menu')
var $write = document.getElementById('write')
var $form = document.getElementById('form')
var $cross = document.getElementById('cross')
var body = document.getElementsByTagName('body')


// прячет и показывает меню
$checkbox.addEventListener('click', function(){
    if ($cart.classList.contains('show')) {
        $cart.classList.remove('show')
        $menu.classList.remove('show')
    }
    else {
        $cart.classList.add('show')
        $menu.classList.add('show')  
    }

})
//Вызывает форму

//показывает форму
$write.addEventListener('click', function(){
   
        $form.classList.remove('hide')
        body[0].style.overflow = 'hidden'
    
})
//прячет форму
$cross.addEventListener('click', function(){
   
    $form.classList.add('hide')
    body[0].style.overflow = 'visible'
})
//
console.log('скрипт подключен')

