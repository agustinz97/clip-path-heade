const btnNav = document.querySelector('.Navbar__btn')
const navMenu = document.querySelector('.Navbar__menu')
const navLinks = document.querySelectorAll('.Navbar__menu li')

btnNav.addEventListener('click', () => {
    navMenu.classList.toggle('open')

    navLinks.forEach( (link, i) => {
        const delay = 0.2 + (2 * i / 10)
        link.style.transitionDelay=`${delay}s`
        console.log(link.style.transitionDelay)
        link.classList.toggle('fade')
    })
})

