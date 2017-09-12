import 'jquery';


module.exports.iconAnimate = () => {
   // Stuff to do as soon as the DOM is ready
   var $imageElement = $('.process-row-image');
   var win = $(window);

   win.scroll(function() {

      var $allProcessImages = $imageElement.filter(function() {
         var $this = $(this);
         var topOfElement = $this.offset().top;
         var bottomOfElement = topOfElement + $this.outerHeight();
         var bottomOfWindow = win.scrollTop() + win.height();
         var topOfWindow = win.scrollTop();


         if ((bottomOfWindow > topOfElement) && (bottomOfElement > topOfWindow)) {
            $(this).addClass('scale-in');
         } else {
            $(this).removeClass('scale-in');
         }
      });
      });



};
