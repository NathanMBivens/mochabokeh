import 'jquery';


module.exports.scrollToPage = () => {
  $('a[href*="#"]').on('click', function() {

    var target = $(this.hash);
    if (target.length) {
      event.preventDefault();

      $('html, body').animate({
        scrollTop: target.offset().top-150
      }, 1000, function() {
        var $target = $(target);

      });
    }
  });
};
