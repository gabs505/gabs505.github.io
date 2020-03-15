// //zrobić przełączenie na dark theme po kliknięciu w ikonkę

// var sideMenu=document.getElementsByClassName('side-menu')[0];
// var links=sideMenu.getElementsByTagName('a');
// for(var i=0;i<links.length;i++){

// 	links[i].addEventListener('click',function(e){
// 	e.preventDefault();
	
// });
// }

//smooth scrolling with jQuery
$('#info-button a').on('click', function (e) {
  if (this.hash !== '') {
    e.preventDefault();

    const hash = this.hash;

    $('html, body')
      .animate({
        scrollTop: $(hash).offset().top
      },800);
  }
});

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