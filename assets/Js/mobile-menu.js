const hamburgerBtn = document.getElementById('menu-icon');
const cancleBtn = document.getElementById('cancle-icon');
const mobileScreen = window.matchMedia('screen and (max-width:768px)');
const mainBody = document.getElementById('main-body');
const mobileMenu = document.getElementById('mobile-menu');

// const desktopScreen = window.matchMedia('screen and (min-width:768px)');

function displayMobileMenu() {
  if (mobileScreen.matches) {
    mainBody.classList.replace('show', 'hide');
    mobileMenu.classList.replace('hide', 'show');
    mobileMenu.classList.add('mobile-menu-style');
  }
}

function hideMobileMenu() {
  mobileMenu.classList.replace('show', 'hide');
  mainBody.classList.replace('hide', 'show');
}

hamburgerBtn.addEventListener('click', displayMobileMenu);
cancleBtn.addEventListener('click', hideMobileMenu);