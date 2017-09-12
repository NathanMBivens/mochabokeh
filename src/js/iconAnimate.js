import 'jquery';


module.exports.iconAnimate = () => {
   // Stuff to do as soon as the DOM is ready
   var $imageElement = $('.process-row-image');
   var win = $(window);

   win.scroll(function() {

      var $allProcessImages = $imageElement.filter(function() {
         var $this = $(this);
         var topOfElement = $this.scrollTop().top;
         var bottomOfElement = $this.outerHeight();
         var bottomOfWindow = win.scrollTop() + win.height();
         var topOfWindow = win.scrollTop();

         return ((bottomOfWindow > topOfElement) && (bottomOfElement > topOfWindow));
      });

      if ($allProcessImages.length) {
         console.log('Here we are.')
         $(this).addClass('scale-in');
      } else {
         $(this).removeClass('scale-in');
      }
   })

};
