// //zrobić przełączenie na dark theme po kliknięciu w ikonkę


window.onload= function() {
  Particles.init({
    selector:'.background',
    connectParticles:true,
    color:'#ccc5c5',
    responsive: [
      {
        breakpoint:769,
  
        options: {
          
          color: '#ffffff',
  
          connectParticles:false
        }
      }]
  });
};

//routing based on hash value
$(document).ready(function() {
  function onHash() {
    // if(!window.location.hash) {
    //   return;
    // }
    if(window.location.hash.substr(1)!='menu')
    {
      var name = window.location.hash.substr(1),
        el = document.getElementById(name);
    }
    
  
    if(el) {					
      // remove current page's class
      document.getElementsByClassName('page-active')[0].classList.add('page');
      document.getElementsByClassName('page-active')[0].classList.remove('page-active');
      // add new page's class
      el.classList.add( 'page-active');
      el.classList.remove( 'page');
    }
  };

  window.onhashchange = onHash;
  onHash();
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

//sticky navbar

$(document).ready(function() {
  // var NavY = $('#info-button').offset().top;
  var NavY=400;

    var stickyNav = function(){
        var ScrollY = $(window).scrollTop();
            
        if (ScrollY > NavY) { 
            $('.go-up-button').addClass('sticky');
        } else {
            $('.go-up-button').removeClass('sticky'); 
        }
    };
    
    stickyNav();
    
    $(window).scroll(function() {
        stickyNav();
    });

    //popup window handling
    
    $('#popup-background').on('click', function(e){
      $('.project-popup').hide();
      $('#popup-background').hide();
    });

  //smooth scrolling with jQuery

$('.scroll-link').on('click', function (e) {
  console.log(this.hash);
  if (this.hash === '#menu'||this.hash === '') {
    
    e.preventDefault();
    
  }
  let hash;
  if(this.hash === ''){
    hash = '#';
    $('html, body')
    .animate({
      scrollTop:0
    },800);
      
  }
  else{
    hash = '#menu';
    $('html, body')
      .animate({
        scrollTop: $(hash).offset().top
      },800);
  }
    


    
  
});
});



  $('.btn').on('click', function (e) {
    let identifier='#'+e.target.id.replace('-button','')
    $(identifier).show();
    if(e.target.id!='info-button'){
      $('#popup-background').show();
    }
    
  })

  
  

  
  
  


