
$(function () {

 

  /* Open Top Menu */
  $('.page').on('click', '.menu-btn', function () {
    if ($('.menu').hasClass('active')) {
      $('.menu').removeClass('active');
      $(this).removeClass('active');
    } else {
      $('.menu').addClass('active');
      $(this).addClass('active');
    }

    return false;
  });

 
  var swiper = new Swiper(".swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});
