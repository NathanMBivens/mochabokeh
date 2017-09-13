import 'jquery';


module.exports.openModal = () => {


  var modal = $('.cupModal');
  var btn = $('.button-hover');
  var span = $('.closeModal');

  btn.click(function() {
    $(modal).css("display", "block");

  });

  span.click(function() {
    $(modal).css("display", "none");
  });

  $(window).click(function(event) {
    if (event.target == modal) {
      $(modal).css("display", "none");
    }
  });
};
