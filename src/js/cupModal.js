import 'jquery';


module.exports.openModal = () => {
  var modal = $('.cupModal');
  var btn = $('.button-hover');
  var span = $('.closeModal');

  btn.click(function() {
    modal.style.display = "block";
  });

  span.click(function() {
    modal.style.display = "none";
  });

  $(window).click(function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
};
