$(document).ready(function() {

$('.stecky-menu').sticky({

        topSpacing:0,
        'zIndex': '',

});

   new WOW().init();



 $('body').materialScrollTop();

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
});

$(document).ready(function(){
$('.counter').counterUp({
    delay: 10,
    time: 1000
});
});

$(document).ready(function(){

$('#bar1').barfiller({
        barColor: "#E2122F",
        tooltip: true,
        duration: 2000
    });
$('#bar2').barfiller({
        barColor: "#E2122F",
        tooltip: true,
        duration: 2000
    });$
('#bar3').barfiller({
        barColor: "#E2122F",
        tooltip: true,
        duration: 2000
    });
$('#bar4').barfiller({
        barColor: "#E2122F",
        tooltip: true,
        duration: 2000
    });
$('#bar5').barfiller({
        barColor: "#E2122F",
        tooltip: true,
        duration: 2000
    });
$('#bar6').barfiller({
        barColor: "#E2122F",
        tooltip: true,
        duration: 2000
    });

  $('#circle').circleProgress({
    value: 0.95,
    size: 130,
    fill: {
      gradient: ["white","aqua"]
    }
  });  
  $('#circle1').circleProgress({
    value: 0.80,
    size: 130,
    fill: {
    gradient: ["white","aqua"]
    }
  });  
  $('#circle2').circleProgress({
    value: 0.60,
    size: 130,
    fill: {
    gradient: ["white","aqua"]
    }
  });  
  $('#circle3').circleProgress({
    value: 0.70,
    size: 130,
    fill: {
    gradient: ["white","aqua"]
    }
  });  
  $('#circle4').circleProgress({
    value: 0.50,
    size: 130,
    fill: {
    gradient: ["white","aqua"]
    }
  });  
  $('#circle5').circleProgress({
    value: 0.65,
    size: 130,
    fill: {
    gradient: ["white","aqua"]
    }
  });
          new WOW().init();
         var containerEl = document.querySelector('.mix_it_up');

            var mixer = mixitup(containerEl);

  $('.full-blog').owlCarousel({
    items:3,
    autoplay:true,
    loop:true,  
    nav:true,
    smartSpeed: 10000,
    slideSpeed:100,
    navText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],

  });
});



     


