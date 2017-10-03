  ! function ($) {
  	//=================================== scroll  ===================================//

  $body.scrollspy({
        target: '#navbar-main',
        offset: navHeight
      })

      $window.on('load', function () {
        $body.scrollspy('refresh')
      })

      $('#navbar-main [href=#]').click(function (e) {
        e.preventDefault()
      })


  };



  // -------------------------------------------------------------
      // Animated scrolling / Scroll Up
      // -------------------------------------------------------------

      (function () {
        $('li a[href*=#]').bind("click", function(e){
          var anchor = $(this);
          $('html, body').stop().animate({ scrollTop: $(anchor.attr('href')).offset().top -50 }, 1000);
          e.preventDefault();
        });
      }());



