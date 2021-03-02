const navToggle = document.querySelector('.header-menu-butten')
const showNav = document.querySelector('.nav')
const closeBtn = document.querySelector('.close')
const linkClick = document.querySelector('.link')

navToggle.addEventListener('click', _ => {
    showNav.classList.toggle('nav-is-open')

})

closeBtn.addEventListener('click', _ => {
    showNav.classList.remove('nav-is-open')
})

linkClick.addEventListener('click', _ => {
    showNav.classList.remove('nav-is-open')
})