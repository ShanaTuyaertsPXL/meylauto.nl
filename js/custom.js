/*=========home page======*/
		 
		 $(function() {
         $('nav#menu').mmenu();
         });
         var swiper = new Swiper('.top_banner', {
           spaceBetween: 0,
           slidesPerView: 1,
           effect: 'fade',
           loop: true,
           autoplay: {
           delay: 2500,
           disableOnInteraction: false,
           },
         });
         var swiper = new Swiper('.product_car', {
           slidesPerView: 3,
           spaceBetween: 25,
           loop: true,
           autoplay: {
           delay: 2500,
           disableOnInteraction: false,
           },           navigation: {
         	nextEl: '.product_car_wrapper .swiper-button-next',
         	prevEl: '.product_car_wrapper .swiper-button-prev',
           },
           breakpoints: {
         	1024: {
         	  slidesPerView: 3,
         	  spaceBetween: 20,
         	},
         	991: {
         	  slidesPerView: 2,
         	  spaceBetween: 20,
         	},
         	767: {
         	  slidesPerView: 1,
         	  spaceBetween: 00,
         	},
         	320: {
         	  slidesPerView: 1,
         	  spaceBetween: 00,
         	}
           }
         });
         var swiper = new Swiper('.band_logo', {
           slidesPerView: 7,
           spaceBetween: 30,
           centeredSlides: true,
           loop: true,
           autoplay: {
           delay: 2500,
           disableOnInteraction: false,
           },
           breakpoints: {
         	1024: {
         	  slidesPerView: 5,
         	  spaceBetween: 30,
         	},
         	768: {
         	  slidesPerView: 4,
         	  spaceBetween: 30,
         	},
         	640: {
         	  slidesPerView:3,
         	  spaceBetween: 20,
         	},
         	360: {
         	  slidesPerView: 2,
         	  spaceBetween: 10,
         	}
           }
         });
          $(document).ready(function(){
         	 $(window).scroll(function(){
         		 if($(window).scrollTop() > 50)
         		 {
         			$('.navbar').addClass('active');
         			$('.navbar-nav').addClass('ml-auto');
         		 }
         		 else
         		 {
         			 $('.navbar').removeClass('active');
         			 $('.navbar-nav').removeClass('ml-auto');
         		 }
         	 });
                });
         $(document).ready(function(){
         $('nav#menu').data('mmenu').bind('opened', function () {
         $('.hamburger').addClass('is-active');
         });
         $('nav#menu').data('mmenu').bind('closed', function () {
         $('.hamburger').removeClass('is-active');
         });
         });
/*=========x======*/
/*=========aanbod dtls===*/
         var galleryThumbs = new Swiper('.gallery-thumbs', {
           spaceBetween: 10,
           slidesPerView: 3,
           freeMode: true,
           watchSlidesVisibility: true,
           watchSlidesProgress: true,
         });
         var galleryTop = new Swiper('.gallery-top', {
           spaceBetween: 10,
           navigation: {
         	nextEl: '.gallery-top .swiper-button-next',
         	prevEl: '.gallery-top .swiper-button-prev',
           },
           thumbs: {
         	swiper: galleryThumbs
           }
         });
 /*=========x===*/
var swiper = new Swiper('.member_slider', {
      slidesPerView: 3,
      spaceBetween: 30,
      navigation: {
		nextEl: '.member-slider-wrapper .swiper-button-next',
		prevEl: '.member-slider-wrapper .swiper-button-prev',
	  },
	   // init: false,
      breakpoints: {
		991: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        }
      }
    });

var swiper = new Swiper('.overons_car', {
           slidesPerView: 4,
           spaceBetween: 20,
           loop: true,
           autoplay: {
           delay: 2500,
           disableOnInteraction: false,
           },
           navigation: {
         	nextEl: '.swiper-button-next',
         	prevEl: '.swiper-button-prev',
           },
           breakpoints: {
         	1024: {
         	  slidesPerView: 3,
         	  spaceBetween: 20,
         	},
         	768: {
         	  slidesPerView: 2,
         	  spaceBetween: 20,
         	},
         	640: {
         	  slidesPerView: 1,
         	  spaceBetween: 00,
         	},
         	320: {
         	  slidesPerView: 1,
         	  spaceBetween: 00,
         	}
           }
         });
/*$(window).load(function(){     
			 $('#myModal').modal('show');
			  }); */





			  /*=======================================*/
			var swiper = new Swiper('.list_img_slider', {
	slidesPerView: 1,
	centeredSlides: false,
	loop:false,
	navigation: {
	nextEl: '.image_area .swiper-button-next',
	prevEl: '.image_area .swiper-button-prev',
	},
	});