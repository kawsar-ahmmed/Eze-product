;(function($){
    "use strict";

    $(document).ready(function(){

        /**-----------------------------
         *  Navbar fix
         * ---------------------------*/  
        $(document).on('click','.navbar-area .navbar-nav li.menu-item-has-children>a',function(e){
            e.preventDefault();
        })

        if ($(window).width() > 992) {
            var navOne = $('.nav-style-01-wrap'),
            navOneHeight = navOne.outerHeight();
            navOne.css('height', navOneHeight+'px');
        }

        /**-----------------------------
         * Background Image -***
         * ---------------------------*/  
        var $backgroundImage = $('.bg-image');
        $backgroundImage.each(function () {
            var $this = $(this),
                $bgImage = $this.data('bg');
            $this.css('background-image', 'url(' + $bgImage + ')');
        });
            

         /*--------------------
            wow js init
        ---------------------*/
        new WOW().init();

        /*-------------------------
            magnific popup activation
        -------------------------*/
        $('.video-play-btn,.video-popup,.small-vide-play-btn').magnificPopup({
            type: 'video'
        });

         /*------------------
            back to top
        ------------------*/
        $(document).on('click', '.back-to-top', function () {
            $("html,body").animate({
                scrollTop: 0
            }, 2000);
        });

         /*------------------------------
            counter section activation 
        -------------------------------*/
        var counternumber = $('.count-num');
        counternumber.counterUp({
            delay: 20,
            time: 3000
        });

                
        /* --------------------------------------------------
            Gallery  
        ---------------------------------------------------- */
        var $galleryFilterArea = $('.product-gallery-filter-area'),
            $galleryFilterMenu = $('.gallery-filter-menu');
        /*Filter*/
        $galleryFilterMenu.on( 'click', 'button, a', function() {
            var $this = $(this),
                $filterValue = $this.attr('data-filter');
            $galleryFilterMenu.find('button, a').removeClass('active');
            $this.addClass('active');
            $galleryFilterArea.isotope({ filter: $filterValue });
        });
        /*Grid*/
        $galleryFilterArea.each(function(){
            var $this = $(this),
                $galleryFilterItem = '.aunter-product-gallery-item';
            $this.imagesLoaded( function() {
                $this.isotope({
                    itemSelector: $galleryFilterItem,
                    percentPosition: true,
                    masonry: {
                        columnWidth: '.product-gallery-sizer',
                    }
                });
            });
        });
        
        /* -------------------------------------------------
         Mobile Menu
        ------------------------------------------------- */
        $('.herboil__navbar-area nav').meanmenu({
            meanScreenWidth: "991",
            meanMenuContainer: '.mobile-menu'
        }); 
      
        /* --------------------------------------------------------------------
            Slider Active (home 1 slider)
        -------------------------------------------------------------------- */
        $('.herboil__slider-active').slick({
            dots: true,
            arrows: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<a class="slick-prev"><i class="fa fa-angle-left"></i></a>',
            nextArrow: '<a class="slick-next"><i class="fa fa-angle-right"></i></a>'
        });
      
        /* --------------------------------------------------------------------
            Product Active
        -------------------------------------------------------------------- */
        $('.product-slider-active').slick({
            dots: false,
            arrows: true,
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,
            prevArrow: '<a class="slick-prev"><i class="fa fa-angle-left"></i></a>',
            nextArrow: '<a class="slick-next"><i class="fa fa-angle-right"></i></a>',
            responsive: [
                {
                  breakpoint: 1200, /* 991 - 1200 */
                  settings: {
                    slidesToShow: 3,
                  }
                },
                {
                  breakpoint: 992,  /* 768 - 992 */
                  settings: {
                    arrows: false,
                    dots: false,
                    slidesToShow: 2,
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    arrows: false,
                    dots: false,
                    slidesToShow: 2,
                  }
                },
                {
                  breakpoint: 575,
                  settings: {
                      arrows: false,
                      dots: false,
                      slidesToShow: 1,
                  }
                }
            ]
        });
      
        /* --------------------------------------------------------------------
            Blog Active
        -------------------------------------------------------------------- */
        $('.latest-blog-active').slick({
            dots: false,
            arrows: true,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: '<a class="slick-prev"><i class="fa fa-angle-left"></i></a>',
            nextArrow: '<a class="slick-next"><i class="fa fa-angle-right"></i></a>',
            responsive: [
                {
                  breakpoint: 1200, /* 991 - 1200 */
                  settings: {
                    slidesToShow: 2,
                  }
                },
                {
                  breakpoint: 992,  /* 768 - 992 */
                  settings: {
                    arrows: false,
                    dots: false,
                    slidesToShow: 2,
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    arrows: true,
                    dots: false,
                    slidesToShow: 1,
                  }
                },
                {
                  breakpoint: 575,
                  settings: {
                      arrows: true,
                      dots: false,
                      slidesToShow: 1,
                  }
                }
            ]
        });

        /* --------------------------------------------------------------------
            Brand Active
        -------------------------------------------------------------------- */
        $('.brand-active').slick({
            dots: false,
            arrows: true,
            infinite: true,
            speed: 300,
            slidesToShow: 6,
            slidesToScroll: 1,
            prevArrow: '<a class="slick-prev"><i class="fa fa-angle-left"></i></a>',
            nextArrow: '<a class="slick-next"><i class="fa fa-angle-right"></i></a>',
            responsive: [
                {
                  breakpoint: 1200, /* 991 - 1200 */
                  settings: {
                    slidesToShow: 4,
                  }
                },
                {
                  breakpoint: 992,  /* 768 - 992 */
                  settings: {
                    arrows: true,
                    dots: false,
                    slidesToShow: 3,
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    arrows: true,
                    dots: false,
                    slidesToShow: 2,
                  }
                },
                {
                  breakpoint: 575,
                  settings: {
                      arrows: true,
                      dots: false,
                      slidesToShow: 1,
                  }
                }
            ]
        });

        /* --------------------------------------------------------------------
            Testimonial Active
        -------------------------------------------------------------------- */
        $('.testimonial-image-active').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            fade: true,
            asNavFor: '.testimonial-info-active'
        });
        $('.testimonial-info-active').slick({
            dots: false,
            arrows: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<a class="slick-prev"><i class="fa fa-angle-left"></i></a>',
            nextArrow: '<a class="slick-next"><i class="fa fa-angle-right"></i></a>',
            asNavFor: '.testimonial-image-active',
        });


        /*----------------------
            Product Details Active
        -----------------------*/
        $('.product-details-large-img-active').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.product-details-small-img-active'
        });
        $('.product-details-small-img-active').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: '.product-details-large-img-active',
            dots: false,
            arrows: false,
            vertical: true,
            focusOnSelect: true,
            prevArrow: '<a class="slick-prev"><i class="fa fa-angle-left"></i></a>',
            nextArrow: '<a class="slick-next"><i class="fa fa-angle-right"></i></a>',
            responsive: [
                {
                  breakpoint: 1200,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    vertical: false,
                    centerMode: false,
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    vertical: false,
                    centerMode: false,
                  }
                }
            ]
        });

        /*----------------------
            Product Deal Active
        -----------------------*/
        $('.product-deal-img-active').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            fade: true,
            asNavFor: '.product-deal-info-active',
            prevArrow: '<a class="slick-prev"><i class="fa fa-angle-left"></i></a>',
            nextArrow: '<a class="slick-next"><i class="fa fa-angle-right"></i></a>',
        });
        $('.product-deal-info-active').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: '.product-deal-img-active',
            dots: false,
            arrows: false,
            vertical: true,
            focusOnSelect: true,
            prevArrow: '<a class="slick-prev"><i class="fa fa-angle-left"></i></a>',
            nextArrow: '<a class="slick-next"><i class="fa fa-angle-right"></i></a>',
            responsive: [
                {
                  breakpoint: 1200,
                  settings: {
                    vertical: false,
                  }
                }
            ]
        });

        
        /*----------------------
            Product Deal Active ( Speacial Product )
        -----------------------*/
        $('.speacial-product-img-active').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          dots: false,
          asNavFor: '.speacial-product-info-active',
          fade: true,
          prevArrow: '<a class="slick-prev"><i class="fa fa-angle-left"></i></a>',
          nextArrow: '<a class="slick-next"><i class="fa fa-angle-right"></i></a>',
      });
      $('.speacial-product-info-active').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          asNavFor: '.speacial-product-img-active',
          dots: false,
          arrows: false,
          vertical: false,
          focusOnSelect: true,
          prevArrow: '<a class="slick-prev"><i class="fa fa-angle-left"></i></a>',
          nextArrow: '<a class="slick-next"><i class="fa fa-angle-right"></i></a>',
      });
          
        /*----------------------
            Light Case
        -----------------------*/
        $('a[data-rel^=lightcase]').lightcase({
            transition: 'scrollHorizontal',
            swipe: true,
            maxWidth: 1170,
            maxHeight: 600,
            slideshow: true
        });

        /*----------------------------
            Quantity plus minus
        ------------------------------ */
          $(".cart-plus-minus").prepend('<div class="dec qtybutton">-</div>');
          $(".cart-plus-minus").append('<div class="inc qtybutton">+</div>');
          $(".qtybutton").on("click", function() {
              var $button = $(this);
              var oldValue = $button.parent().find("input").val();
              if ($button.text() == "+") {
                  var newVal = parseFloat(oldValue) + 1;
              } 
              else {
                  if (oldValue > 0) {
                      var newVal = parseFloat(oldValue) - 1;
                  } 
                  else {
                      newVal = 0;
                  }
              }
              $button.parent().find("input").val(newVal);
          });


        /* ---------------------------------------------------------
            Price Slider
        --------------------------------------------------------- */
         $( "#slider-range" ).slider({
             range: true,
            min: 50,
            max: 2000,
            values: [ 50, 999 ],
            slide: function( event, ui ) {
                $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
            }
        });
        $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
        " - $" + $( "#slider-range" ).slider( "values", 1 ) ); 

        /* ---------------------------------------------------------
            Current Year Copyright area
        --------------------------------------------------------- */
        $(".current-year").text((new Date).getFullYear())

        /* ---------------------------------------------------------
            Countdown
        --------------------------------------------------------- */
        $('[data-countdown]').each(function() {
            var $this = $(this), finalDate = $(this).data('countdown');
            $this.countdown(finalDate, function(event) {
              $this.html(event.strftime('<span class="cdown days"><span class="time-count">%-D</span> <p>Days</p></span> <span class="cdown hour"><span class="time-count">%-H</span> <p>Hour</p></span> <span class="cdown minutes"><span class="time-count">%M</span> <p>Min</p></span> <span class="cdown second"> <span><span class="time-count">%S</span> <p>Sec</p></span>'));
            });
          });	


    });


    //define variable for store last scrolltop
    var lastScrollTop = '';

    $(window).on('scroll', function () {
        
        //back to top show/hide
       var ScrollTop = $('.back-to-top');
       if ($(window).scrollTop() > 1000) {
           ScrollTop.fadeIn(1000);
       } else {
           ScrollTop.fadeOut(1000);
       }

       /* --------------------------
        sticky menu activation   if ($(window).width() > 992) {
       ------------------------- */
        var st = $(this).scrollTop();
        var mainMenuTop = $('.navbar-area');
        if($(window).width() > 992) {
            if ($(window).scrollTop() > 1000) {
                if (st > lastScrollTop) {
                    // hide sticky menu on scrolldown 
                    mainMenuTop.removeClass('nav-fixed');
                    
                } else {
                    // active sticky menu on scrollup 
                    mainMenuTop.addClass('nav-fixed');
                }

            } else {
                mainMenuTop.removeClass('nav-fixed ');
            }            
        }


        lastScrollTop = st;
       
    });
           

    $(window).on('load',function() {

        /*---------------------
            Nice Select ***
        ----------------------*/
        $('.nice-select').niceSelect();

        /*---------------------
            Instafeed ***
        ----------------------*/
        $('.instafeed').each(function() {
            var $this = $(this),
                $id = $this.find('ul').attr('id'),
                $limit = $this.data('limit'),
                $resolution = $this.data('resolution');
            if($this.length) {
                var feed = new Instafeed({
                    get: 'user',
                    userId: 28029060845,
                    accessToken: '28029060845.1677ed0.7905220867f44db7aed3289c23f81609',
                    target: $id,
                    resolution: $resolution,
                    limit: $limit,
                    template: '<li><a href="{{link}}" target="_new"><img src="{{image}}" /><span class="insta-view"><i class="icon-Group-180"></i>View Post</span></a></li>',
                });
                feed.run();
            }
        });

       


    });


})(jQuery);


