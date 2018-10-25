// window.onscroll = function() {
//     let target = [...document.querySelectorAll(".section")];
  
//     let height = window.innerHeight;
  
//     let scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
  
//     // Change this if you want it to fade faster
//     height = height / .2;
  
//     target.forEach(el => el.style.opacity = (height - scrollTop) / height);
  
//   };

// Hamburger
const ham = document.querySelector('#nav-icon1');
const navUl = document.querySelector('.menu-list');
const section = document.querySelectorAll('.section');
const pimg = document.querySelectorAll('.pimg');
const myImg = document.querySelectorAll('#myImg');
const menuItem = document.querySelectorAll(".menu-item");



function toggleHam(){
    ham.classList.toggle("open");
    navUl.classList.toggle("slide");
    navUl.classList.toggle("hide");
    section.forEach(el => el.classList.toggle("blur"));
    pimg.forEach(el => el.classList.toggle("blur"));
    myImg.forEach(el => el.classList.toggle("blur"));
    // navUl.style.transform
}

function detectSize() {
    if(window.innerWidth <= 450) {
        navUl.classList.add("hide");
    } else navUl.classList.remove("hide");
}

//need to address bug where if mobile menu is open and window is made bigger, menu disappears
window.addEventListener('resize', detectSize);
menuItem.forEach(el => el.addEventListener("click", toggleHam));
ham.addEventListener('click', toggleHam);
ham.addEventListener('touchstart', toggleHam);


// $(document).ready(function() {
//     $("#nav-icon1").click(function() {
//       $(this).toggleClass("open");
//     });
//   });


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


// Modal Image

// Get the modal
var modal = document.querySelectorAll('#myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.querySelectorAll('#myImg');
var modalImg = document.querySelectorAll("#img01");
var captionText = document.querySelectorAll("#caption");
img.forEach(el => el.onclick = function(){
    modal.forEach(a => a.style.display = "block");
    modalImg.forEach(b => b.src = this.src);
    captionText.forEach(c => c.innerHTML = this.alt);
    

} )

// Get the <span> element that closes the modal
var span = document.querySelectorAll(".close");
// console.log(span);



// When the user clicks on <span> (x), close the modal
span.forEach(d => d.addEventListener('click', function close() { 
    console.log("closed");
    modal.forEach(a => a.style.display = "none");
}));