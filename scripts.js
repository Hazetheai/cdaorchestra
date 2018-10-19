// window.onscroll = function() {
//     let target = [...document.querySelectorAll(".section")];
  
//     let height = window.innerHeight;
  
//     let scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
  
//     // Change this if you want it to fade faster
//     height = height / .2;
  
//     target.forEach(el => el.style.opacity = (height - scrollTop) / height);
  
//   };

const arrow = document.querySelector('.step-inside');
const tag = document.querySelector('.tagline');

function hideArrow() {
    if(window.pageYOffset > 50) {
        arrow.classList.add('hide');
        tag.classList.add('hide');
    } else {
        arrow.classList.remove('hide');
        tag.classList.remove('hide');
    };
}   

document.addEventListener('scroll', hideArrow);