window.addEventListener('scroll', function(){
  var header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
});

function toggleMenu(){
  const menuToggle = document.querySelector('.toggle');
  const menu = document.querySelector('.menu');
  menuToggle.classList.toggle('active');
  menu.classList.toggle('active');
}
/*
window.onload = function(){
  const content = document.querySelector("#acerca");
  const services = document.querySelector("#servicios");
  const work = document.querySelector("#trabajos");
  window.addEventListener('scroll', scrollEffect);
  function scrollEffect(){
    if(window.scrollY>200 && window.scrollY<1200){
      content.style.opacity = "1";
      content.style.transform = 'translateX(0vw)';

    }
    else if(window.scrollY>=1200){
      services.style.opacity = "1";
      services.style.transform = 'translateX(0vw)';
    }
    else {
      content.style.opacity ='0';
      content.style.transform ='translateX(-50vw)';
      content.style.transition ='0.5s all ease-in-out';
      services.style.opacity ='0';
      services.style.transform ='translateX(50vw)';
      services.style.transition ='0.5s all ease-in-out';    }
  }
  scrollEffect();
}
*/
