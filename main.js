'user strict'

{
  
  //ハンバーガーメニュー
  const hamMenu = document.querySelector('.ham-menu');
  const hamNav = document.querySelector('#ham-nav');
  const hideMenu = document.querySelector('.hide');
  const navItems = document.querySelectorAll('.ham-nav-list');

  hamMenu.addEventListener('click', function() {
    hamMenu.classList.toggle('active');
    hamNav.classList.toggle('active');
    hideMenu.classList.toggle('active');
  });

  navItems.forEach((navItems) => {
    navItems.addEventListener('click', function() {
      hamMenu.classList.toggle('remove');
      hamNav.classList.toggle('remove');
      hideMenu.classList.toggle('remove');
    });
  });


  //スライダー
  const swiper = new Swiper(".swiper", {
    slidesPerView: 1.18,
    loop: true,
    centeredSlides: true,

    breakpoints: {
      658: {
        slidesPerView: 3.4,
      }
    },
  });
  
}
