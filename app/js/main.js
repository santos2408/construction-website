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

window.addEventListener('click', handleMenuListClick)
menuList.addEventListener('click', handleMenuListClick)
menuToggle.addEventListener('click', showMenu)