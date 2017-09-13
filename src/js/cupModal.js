import 'jquery';


module.exports.openModal = () => {


  var modal = $('.cupModal');
  var btn = $('.button-hover');
  var submitButton = $('.submitEmail');
  var span = $('.closeModal');

  btn.click(function() {

    $(modal).fadeIn();
    $(modal).css("display", "flex");


  });

  span.click(function() {
    $(modal).fadeOut();
    $("body").css("filter", "none");
  });

  submitButton.click(function() {
    $(modal).fadeOut();
  })

  $(window).click(function(event) {
    if (event.target == modal) {
      $(modal).css("display", "none");
    }
  });
};
