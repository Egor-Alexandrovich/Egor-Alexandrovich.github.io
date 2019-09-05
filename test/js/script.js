$(document).ready(function(){
    //слайдер для секции preview
    $('.slider-init').slick({
        dots: true,
        slidesToShow: 1,
        arrows: false,
    });
    
    
    
  });
const img = document.getElementsByClassName('img-win');
const wind = document.getElementsByClassName('windows-elem');
for ( let i = 0; i < wind.length; i++ ){
    wind[i].addEventListener('click', function(){
        if (this.classList.contains('act')) {
        }
        else {
            for ( let i = 0; i < wind.length; i++  ){
                if (wind[i].classList.contains('act')) {
                    wind[i].classList.remove('act');
                    img[i].classList.add('hide');
                    img[i].classList.remove('show');
    
                }
            }
            this.classList.add('act');
            img[i].classList.add('show');
            img[i].classList.remove('hide');
        }
    })    
}

//всплывающие окно
const btn = document.getElementById('btn-form');
const popup = document.getElementById('popup');
const cross = document.getElementById('cross'); 
const form = document.getElementById('form')
form.addEventListener('submit', function(event){
    event.preventDefault()
    popup.classList.remove('hide');
    document.body.style.overflow="hidden";   
});
cross.addEventListener('click', function(){
        popup.classList.add('hide');
        document.body.style.overflow="visible";
})