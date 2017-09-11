import 'jquery';


module.exports.mobileMenu = () => {
    $(".exit").hide();
    $(".mobile-nav").hide();
    $(".hamburger").click(function() {
      $(".mobile-nav").slideToggle("medium",
    function(){
      $(".hamburger").hide();
      $(".exit").show();
    });
  });

    $(".exit").click(function() {
      $(".mobile-nav").slideToggle("medium", function() {
        $(".exit").hide();
        $(".hamburger").show();
      });
    });

  }
