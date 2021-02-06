$(document).ready(function () {


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

  var menuButton = $(".header-menu");
  menuButton.on("click", function () {
    $(".navbar-header").toggleClass("navbar-header--visible");
  });

  const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  
});
