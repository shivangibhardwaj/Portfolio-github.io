 var cur = document.querySelector('.cursor');

document.addEventListener('mousemove', function(e){
    cur.style.left = e.clientX + 'px';
    cur.style.top = e.clientY + 'px';
})

  // header
  
  
 window.addEventListener("scroll",function(){
    const header=document.querySelector("header");
    header.classList.toggle('sticky' ,window.scrollY > 0);
});


let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');
let scrollBar = document.querySelector('.scroll-bar');

menu.addEventListener('click',() =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('nav-toggle');
});

window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('nav-toggle');
  scrollIndicator();
}

function scrollIndicator(){

  let maxHeight = window.document.body.scrollHeight - window.innerHeight;
  let percentage = ((window.scrollY) / maxHeight) * 100;
  scrollBar.style.width = percentage + '%';

}