(function (){
    
    'use strict';
    
    let item = 0;
    
    function changeCarouselStage(stageSelector, markerSelector, paginationSelector){
        
        var stage = document.querySelector(stageSelector);
        var marker = document.querySelector(markerSelector);
        var pagination = document.querySelectorAll(paginationSelector + ' img');
                
        switch (item) {
          case 0:
            stage.classList.add('item-1');
            stage.classList.remove('item-6');
                
            marker.classList.add('item-1');
            marker.classList.remove('item-6');
                
            pagination[item].classList.add('on');
            pagination[pagination.length - 1].classList.remove('on');
                
            break;
          case 1:
            stage.classList.add('item-2');
            stage.classList.remove('item-1');
                
            marker.classList.add('item-2');
            marker.classList.remove('item-1');
                
            pagination[item].classList.add('on');
            pagination[item - 1].classList.remove('on');
                
            break;
          case 2:
            stage.classList.add('item-3');
            stage.classList.remove('item-2');
                
            marker.classList.add('item-3');
            marker.classList.remove('item-2');
                
            pagination[item].classList.add('on');
            pagination[item - 1].classList.remove('on');
                
            break;
          case 3:
            stage.classList.add('item-4');
            stage.classList.remove('item-3');
                
            marker.classList.add('item-4');
            marker.classList.remove('item-3');
                
            pagination[item].classList.add('on');
            pagination[item - 1].classList.remove('on');
                
            break;
          case 4:
            stage.classList.add('item-5');
            stage.classList.remove('item-4');
                
            marker.classList.add('item-5');
            marker.classList.remove('item-4');
                
            pagination[item].classList.add('on');
            pagination[item - 1].classList.remove('on');
                
            break;
          case 5:
            stage.classList.add('item-6');
            stage.classList.remove('item-5');
                
            marker.classList.add('item-6');
            marker.classList.remove('item-5');
                
            pagination[item].classList.add('on');
            pagination[item - 1].classList.remove('on');                
            break;
        }
                
        item++;
        
        if(item == 6)
            item = 0;
    }
    
    setInterval(function(){
        changeCarouselStage('#carouselStage', '#carousel-item-marker', '#carouselPagination');
    }, 3000);
    
})();


