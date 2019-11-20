
$(document).ready(function () {

  // Navigation Scrolling -----------------------

  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function () {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });

  $('.js--section-aboutMe').waypoint(function (direction) {
    if (direction == 'down')
      $('nav').addClass('stiky');
    else
      $('nav').removeClass('stiky');
  }, {
    offset: '42px'
  });

  // mobile nav ----------------

  $('.js--nav-icon').click(function () {

    $('.main-nav').slideToggle(250);
    let icon = $('.js--nav-icon i');

    if (icon.attr('class') == 'la la-bars') {
      icon.removeClass('la la-bars');
      icon.addClass('la la-caret-down');
    } else {
      icon.removeClass('la la-caret-down');
      icon.addClass('la la-bars');
    }
  });

  $('.main-nav').click(function () {
    if (window.innerWidth <= 767) {
      $('.main-nav').slideToggle(200);
      let icon = $('.js--nav-icon i');

      if (icon.attr('class') == 'la la-caret-down') {
        icon.removeClass('la la-caret-down');
        icon.addClass('la la-bars');
      }
    }
  });

  $(window).resize(function () {
    if (window.innerWidth >= 767) {
      $('.main-nav').attr('style', 'display: block;');
    } else {
      $('.main-nav').attr('style', 'display: none;');
      }
  });

});
