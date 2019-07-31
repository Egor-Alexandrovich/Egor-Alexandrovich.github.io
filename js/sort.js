//сортировка по галереи
for ( i = 0; i < gallery.childElementCount; i++) {
    gallery.children[i].addEventListener('click', function(){
        if (this.classList.contains('active')) {
        }
        else {
            for ( j = 0; j < gallery.childElementCount; j++ ){
                if (gallery.children[j].classList.contains('active')) {
                    gallery.children[j].classList.remove('active')
                }
            }
            this.classList.add('active')
            if (this.classList.contains('all')) {
                showImg([0,1,2,3,4,5])
            }
            if (this.classList.contains('webdesing')) {
                showImg([0,1])
            }
            if (this.classList.contains('mobapp')) {
                showImg([2,3])
            }
            if (this.classList.contains('illustr')) {
                showImg([4,5])
            }
            if (this.classList.contains('photogr')) {
                showImg([0,5])
            }
        }
    })
    
}
// Увеличивает и уменьшает картинку в галерее
for ( i = 0; i < galleryContent.childElementCount; i++ ) {
    galleryContent.children[i].children[1].addEventListener('click', function(){  
        if (!this.classList.contains('hide')) {
            this.classList.add('hide')
            document.body.style.overflow="visible"
        }
    })

    galleryContent.children[i].children[0].children[0].addEventListener('click', function(){
        //console.log(this.parentNode.parentNode.children[1])
    if (this.parentNode.parentNode.children[1].classList.contains('hide')) {
        this.parentNode.parentNode.children[1].classList.remove('hide')
        document.body.style.overflow="hidden"
        }
    })
}
// функция вывода выбранных картинок
function showImg(numberImg){
    for ( j = 0; j < galleryContent.childElementCount; j++ ) {
       galleryContent.children[j].style.display="none"
        }
    for (i = 0; i < numberImg.length; i++) {
        galleryContent.children[numberImg[i]].style.display="flex"
    }   
}
/* var br = true;
window.onscroll = function() {
    if ((counter.offsetTop-window.pageYOffset < 350)&&((counter.offsetTop-window.pageYOffset > 70))&&(br)) {
        $('.count').each(function () {
            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            }, {
                duration: 1000,
                easing: 'swing',
                step: function (now) {
                    $(this).text('name-data')(Math.ceil(now));
                }
            });
        });
        br = false;
    } 
  }*/
