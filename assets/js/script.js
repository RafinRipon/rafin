$('#menu-btn').click(function(){
    $('.navigation ul').addClass('active')
});

$('#menu-close').click(function(){
    $('.navigation ul').removeClass('active')
});


$('document').ready(function(){
    
  var $grid =  $('.portfolio-active').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
          // use outer width of grid-sizer for columnWidth
          columnWidth: 1
        }
      });

      $('.portfolio-menu').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
      });

      //for menu active class
      $('.portfolio-menu button').on('click', function(event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
      });

      $('.slick-slider').slick({
        centerMode: true,
        // centerPadding: '40px',
        slidesToShow: 3,
        // slidesToScroll: 1,
        dots: true,
        autoplaySpeed: 2000,
        autoplay: true,
        prevArrow:'<i class="fas fa-angle-left left-arrow"></i>',
        nextArrow:'<i class="fas fa-angle-right right-arrow"></i>',
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
         
          {
            breakpoint: 600,
            settings: "unslick"
          },

        ]
      });


      
    $('#bar1').barfiller({
      barColor: 'crimson',
      duration: 3000,
    });
    $('#bar2').barfiller({
      barColor: '#000',
      duration: 3200,
    });
    $('#bar3').barfiller({
      barColor: '#Ff1493',
      duration: 3500,
    });
    $('#bar4').barfiller({
      barColor: '#00ffff',
      duration: 3000,
    });
    $('#bar5').barfiller({
      barColor: '#39ff14',
      duration: 3100,
    });

    $('.parter-logo').slick({
      centerMode: true,
      centerPadding: '40px',
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplaySpeed: 1000,
      dots: false,
      prevArrow: false,
      nextArrow: false,
      autoplay: true,
    });

});

const toTop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }

})