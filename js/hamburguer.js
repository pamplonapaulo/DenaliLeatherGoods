(function(){
    
    'use strict';
    
    var button = document.querySelector('.navbar-burger');
    var nav = document.querySelector('nav');
    
    button.addEventListener('click', function(){
        
        button.classList.toggle('active');
        nav.classList.toggle('active');
        
    });
    
})();