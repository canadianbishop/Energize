const mobileMenu =document.querySelector('#mobile_menu');
const menuItems = document.querySelector('#menu_items');

mobileMenu.addEventListener('click',()=>{
      menuItems.classList.toggle('active')
})