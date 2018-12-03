//Select DOM Items (UI structure)
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const branding = document.querySelector('.branding');
const navItems = document.querySelectorAll('.nav-item');

//Set initial state of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu(){
  if(!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    branding.classList.add('show');
    navItems.forEach( item => item.classList.add('show'));

    //Set Menu state
    showMenu = true;
  } else{
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    branding.classList.remove('show');
    navItems.forEach( item => item.classList.remove('show'));

    //Set Menu state
    showMenu = false;

  }
}