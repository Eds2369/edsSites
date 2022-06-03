const navLinks = document.getElementById('nav-links')
const navBtn = document.getElementById('mobile-nav')
const closeNav = document.getElementById('mobile-close-btn')

navBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show')
})

closeNav.addEventListener('click', () => {
    navLinks.classList.remove('show')
})