const navbarBtn = document.getElementById('navbarBtn')
const navbarNav = document.querySelector('.navbar__nav')
const menuIcon = document.querySelector('.bx-menu')
const closeMenu = document.querySelector('.close-menu')

const home = document.querySelector('.intro')
const aboutMe = document.querySelector('.about')
const skills = document.querySelector('.skill')
const portfolio = document.querySelector('.portf')
const contact = document.querySelector('.cont')

// Activar y desactivar el menú hamburguesa

function toggleMenu () {
  navbarNav.classList.toggle('active')
  menuIcon.classList.toggle('open-menu__off')
  closeMenu.classList.toggle('close-menu__active')
}

/*Activar*/
navbarBtn.addEventListener("click", toggleMenu)

/*Desactivar*/
// home.addEventListener("click", toggleMenu)
// aboutMe.addEventListener("click", toggleMenu)
// skills.addEventListener("click", toggleMenu)
// portfolio.addEventListener("click", toggleMenu)
// contact.addEventListener("click", toggleMenu)