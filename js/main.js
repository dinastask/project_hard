$(document).ready(function () {

  //настройки акардиона на section main
  var mainListBlock = $(".main-list-block");
  var trendingShoppingItem = $(".main-content-list-item");

  mainListBlock.on("click", function (event) {
    var activeContent = $(this).attr("data-target");

    mainListBlock.removeClass("main-list-block--active");
    trendingShoppingItem.removeClass("main-content-list-item--active");
    $(activeContent).addClass("main-content-list-item--active");
    $(this).addClass("main-list-block--active");
    console.log($(acctiveContent));
  });

  //настройки всплывающего меню
  var menuButton = $(".header-menu");
  menuButton.on("click", function () {
    $(".navbar-header").toggleClass("navbar-header--visible");
  });

  //настройки слайдера на section main
  const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  

  $(document).ready( function() {
    /* Check width on page load*/
    if ( $(window).width() < 768) {
     $('.main-content-list-item').removeClass('main-content-list-item--active');
    }
    else {
      
    }


});




  
});
