const header = document.querySelector('[data-js="header"]')
const menu = document.querySelector('[data-js="nav-menu"]')
const menuToggle = document.querySelector('[data-js="menu-open"]')
const menuList = document.querySelector('[data-js="menu-list"]')

const handleMenuToggleAnimation = () => {
  if (menuToggle.classList.contains('active')) {
    menuToggle.classList.remove('active')
  } else {
    menuToggle.classList.add('active')
  }
}

const handleMenuListClick = event => {
  const clickedElement = event.target
  const isALink = clickedElement.tagName === 'A'
  const notHasNavClassClosest = !clickedElement.closest('.nav')

  if ( isALink || notHasNavClassClosest) {
    menu.classList.remove('show-menu')  
    menuToggle.classList.remove('active')
  }
}

const showMenu = () => {
  handleMenuToggleAnimation()

  if (menu.classList.contains('show-menu')) {
    menu.classList.remove('show-menu')
  } else {
    menu.classList.add('show-menu')
  }
}

const handleWindorScroll = () => {
  if (window.scrollY >= 40) {
    header.classList.add('header-scroll')
    menu.classList.remove('show-menu')
    menuToggle.classList.remove('active')
    return
  }
  header.classList.remove('header-scroll')
}

const handleWindowSize = () => {
  const swiperNavigationContainer = document.querySelector('[data-js="swiper-navigation-buttons"]')
  const screenWidth = window.innerWidth

  if (screenWidth >= 760) {
    swiperNavigationContainer.classList.add('swiper-navigation-buttons_hidden')
    return
  }

  swiperNavigationContainer.classList.remove('swiper-navigation-buttons_hidden')
}

handleWindowSize()

const swiper = new Swiper('.swiper', {
  speed: 400,
  centeredSlides: true,
  spaceBetween: 20,
  slidesPerView: 1,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
      centeredSlides: false,
    },

    760: {
      slidesPerView: 3,
      spaceBetween: 20,
      centeredSlides: false,
    }
  },
});

window.addEventListener('scroll', handleWindorScroll)
window.addEventListener('click', handleMenuListClick)
window.addEventListener("resize", handleWindowSize)
menuList.addEventListener('click', handleMenuListClick)
menuToggle.addEventListener('click', showMenu)