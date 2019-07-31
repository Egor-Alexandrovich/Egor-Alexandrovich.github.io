var checkbox = document.getElementById('checkbox')
var cart = document.getElementById('cart')
var menu = document.getElementById('menu')
var search = document.getElementById('search')
var searchIcon = document.getElementById('search-icon')
var gallery = document.getElementById('all')
var galleryContent = document.getElementById('gallery-content')
var video = document.getElementById('video')
var buttonVideo = document.getElementById('button-video')
var counter = document.getElementById('counter')

// Управление видео
video.addEventListener("click", function () {
    PlayPauseVideo()
})
buttonVideo.addEventListener("click", function () {
    PlayPauseVideo()
})

function PlayPauseVideo(){
    if (video.paused) {
        video.play()
    }
    else {
        video.pause()
    }
}

// прячет и показывает меню
checkbox.addEventListener('click', function(){
    if (menu.classList.contains('show')) {
        cart.style.display = 'none'
        menu.classList.remove('show')
    }
    else {
        cart.style.display = 'flex'
        menu.classList.add('show')  
    }

})
// вызов поиска 
searchIcon.addEventListener('click', function(){
    if (search.classList.contains('search-active')) {
        search.classList.remove('search-active')
    }
    else {
        search.classList.add('search-active')
    }

})
//инициализация слайдеров
$(document).ready(function(){
    //слайдер для секции preview
    $('.slider-container').slick({
        dots: true,
        nextArrow: '<div class="sl-next"><span class="icon-chevron-right"></span></div>',
        prevArrow: '<div class="sl-prev"><span class="icon-chevron-left"></span></div>'
    });
    //Слайдер для секции aboutas 
    $('.aboutas-slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0',
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
              }
            }]

    });
    //Слайдер для секции blog
    $('.blog-slider').slick({
        infinite: true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
              }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                }
              },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                arrows: false,
              }
            }]
    });
    // плавная прокрутка к якорю
    $("a.topLink").click(function() {
        $("html, body").animate({
           scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
           duration: 500,
           easing: "swing"
        });
        return false;
     });
  });
// сортировка по галерее
var selected
gallery.onclick = function(event) {
    var target = event.target;
    active(target);
    if (target.classList.contains('all')) {
        showImg([0,1,2,3,4,5])
    }
    if (target.classList.contains('webdesing')) {
        showImg([0,1])
    }
    if (target.classList.contains('mobapp')) {
        showImg([2,3])
    }
    if (target.classList.contains('illustr')) {
        showImg([4,5])
    }
    if (target.classList.contains('photogr')) {
        showImg([0,5])
    }
}
function active(node) {
    if (selected) {
      selected.classList.remove('active');
    }
    selected = node;
    selected.classList.add('active');
  }
function showImg(numberImg){
    for ( j = 0; j < galleryContent.childElementCount; j++ ) {
       galleryContent.children[j].style.display="none"
        }
    for (i = 0; i < numberImg.length; i++) {
        galleryContent.children[numberImg[i]].style.display="flex"
    }   
}


// увеличивает и уменьшает картинку
galleryContent.onclick = function(event) {
    let icon = event.target
    if (icon.classList.contains('icon-search')) {
       icon.parentNode.parentNode.children[1].classList.remove('hide');
       document.body.style.overflow="hidden"
    }
    if (icon.classList.contains('loupe')) {
        icon.classList.add('hide');
        document.body.style.overflow="visible"
     }
     if (icon.tagName === 'IMG') {
        console.log(icon.tagName)
        icon.parentNode.classList.add('hide');
        document.body.style.overflow="visible"
     }
}
 // счетчики
 
const count = document.querySelector('#counter')

function timer (start,end,time){
     let interval = setInterval(function () {

        if (parseFloat(start.textContent) >= end) {
            clearInterval(interval)
        } else {
            start.textContent++
        }
    }, Math.floor(time/end))
}
 var br = true;
window.onscroll = function() {
    if ((counter.offsetTop-window.pageYOffset < 350)&&((counter.offsetTop-window.pageYOffset > 70))&&(br)) {
        for ( i = 0; i < count.childElementCount; i++ ) {
    timer (count.children[i].children[1], count.children[i].children[1].getAttribute('name-data'), 1000)

     }
        br = false;
    } 
  }
// Вкладки секции mobail
const tabs = document.getElementById('tabs');
tabs.onclick = function(event) {
    let target = event.target;
    if (target.classList.contains('act')) {
    }
    else {
        for ( j = 0; j < target.parentNode.childElementCount; j++ ){
            if (target.parentNode.children[j].classList.contains('act')) {
                target.parentNode.children[j].classList.remove('act')
                tabs.children[j+1].classList.add('hide')
                tabs.children[j+1].classList.remove('active')

            }
        }
        target.classList.add('act')
        for ( j = 0; j < target.parentNode.childElementCount; j++ ){
            if (target.parentNode.children[j].classList.contains('act')) {
                tabs.children[j+1].classList.add('active')
                tabs.children[j+1].classList.remove('hide')
            }
        }
    }
    
}

 
 
 