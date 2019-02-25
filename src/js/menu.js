let menuIcon = document.getElementsByClassName('header__menu-icon');
menuIcon[0].addEventListener("click", showMenu);
function showMenu() {
  let header = document.getElementsByClassName('container_header');
  header[0].classList.toggle('menu_open');  
}