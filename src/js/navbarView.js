import 'jquery';

module.exports.fixedNavbar = () => {

  $(window).scroll(function() {
    if ($(window).scrollTop() > 400) {
      $('.fixed-navigation-wrapper').fadeIn(300);
    } else {
      $('.fixed-navigation-wrapper').fadeOut(250);
    }
  });
};
