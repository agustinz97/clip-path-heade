const btnNav = document.querySelector('.Navbar__btn')
const navMenu = document.querySelector('.Navbar__menu')
const navLinks = document.querySelectorAll('.Navbar__menu li')

btnNav.addEventListener('click', () => {
    navMenu.classList.toggle('open')

    navLinks.forEach( (link, i) => {
        link.classList.toggle('fade')
    })
})

