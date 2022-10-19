const closeMenu = () => {
    document.querySelector('.menu-btn').classList.remove('active-btn')
    document.querySelector('.menu-btn').classList.remove('disable-btn')
    document.querySelector('.header').classList.remove('active-header')
    document.querySelector('.header-site-nav').classList.remove('mobile-nav')
    document.querySelector('.header-logo').classList.remove('header-logo-nav-open')
    document.querySelector('.header-logo-text').classList.remove('header-logo-text-nav-open')
    document.querySelector('.header-logo-img').classList.remove('header-logo-img-nav-open')
    document.body.classList.remove('body-menu-open')
    document.querySelector('.blur').classList.remove('blur-visible')
}

document.querySelector('.menu-btn-block').addEventListener('click', () => {
    if (document.querySelector('.menu-btn').classList.contains('active-btn')) {
        document.querySelector('.menu-btn').classList.remove('active-btn')
        document.querySelector('.menu-btn').classList.add('disable-btn')
    } else {
        document.querySelector('.menu-btn').classList.add('active-btn')
        document.querySelector('.menu-btn').classList.remove('disable-btn')
    }   
    document.querySelector('.header').classList.toggle('active-header')
    document.querySelector('.header-site-nav').classList.toggle('mobile-nav')
    document.querySelector('.header-logo').classList.toggle('header-logo-nav-open')
    document.querySelector('.header-logo-text').classList.toggle('header-logo-text-nav-open')
    document.querySelector('.header-logo-img').classList.toggle('header-logo-img-nav-open')
    document.body.classList.toggle('body-menu-open')
    document.querySelector('.blur').classList.toggle('blur-visible')
})
window.addEventListener('resize', ()=> {
    if (window.innerWidth > 800) {
        closeMenu()
    }
})
document.querySelector('.blur').addEventListener('click', ()=>{
    closeMenu()
})