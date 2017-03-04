//---GALLERY---
$(function () {
   $('.portfolio-gallery__link').fancybox({
      transitionIn: 'elastic'
      , transitionOut: 'elastic'
      , titlePosition: 'over'
   });
});

$(function(){
function visibleElement(elemView,elemAnimated,classEl){
   elemView.on('inview',function(event,isInView){
      if(isInView){
         elemAnimated.addClass(classEl);
      }
      else{
         elemAnimated.removeClass(classEl);
      }
   })
}
var $about = $('.about');   
var $contact = $('.contact');   
var $contactItem = $('.contact-item');   
var $homeArrow = $('.home-arrow');   
var $homeItem = $('.home-hexogen__item');   
var $aboutItem = $('.about-item');
var bounceInLeft = "bounceInLeft";  
var bounceInRight = "bounceInRight";  
var bounceInDown = "bounceInDown";
   $(window).resize(function () {
   if($(window).width() > 768){
      visibleElement($about,$aboutItem.eq(1),bounceInRight);
visibleElement($about,$aboutItem.eq(0),bounceInLeft);
visibleElement($homeArrow,$homeItem.eq(0),bounceInLeft);
visibleElement($homeArrow,$homeItem.eq(1),bounceInLeft);
visibleElement($homeArrow,$homeItem.eq(2),bounceInDown);
visibleElement($homeArrow,$homeItem.eq(3),bounceInDown);
visibleElement($homeArrow,$homeItem.eq(4),bounceInRight);
visibleElement($homeArrow,$homeItem.eq(5),bounceInRight);
visibleElement($contact,$contactItem.eq(0),bounceInLeft);
visibleElement($contact,$contactItem.eq(1),bounceInRight);
   }

})
});

    


$(function () {
      var $pageNav = $('.header');
      var $navigOffset = $pageNav.offset();
      var $mainMenu = $('.header-list');
      //for header menu
      $(window).scroll(function () {
         if ($(window).scrollTop() > $navigOffset.top) {
            $pageNav.addClass('sticky');
         }
         else {
            $pageNav.removeClass('sticky');
         }
      })
   })
   //skills stripes animating
$(".skills-item__strip").each(function () {
      $this = $(this);
      var $progressBarTitle = $this.prev().find('span');
      var $bar = $this.find('.skills-item__strip-inner');
      var percent = $bar[0].style.width;
      $progressBarTitle.text('0%');
      $bar.attr('style', 'width:0%')
      $this.on('inview', function () {
         $bar.animate({
            width: percent
         }, {
            duration: 2000
            , step: function (now) {
               $progressBarTitle.text(Math.round(now) + '%');
            }
         })
      })
   })
var touch = $('.touch-nav'); 
var menu = $('.header-nav'); 
function slowScroll(clas) {
   $(touch).toggleClass('open');
   var offset = 50;
   if ($(window).width() < 768) {
      menu.slideToggle();
   }
   else {
      menu.css('display', 'block');
   }
   $('body').animate({
      scrollTop: $(clas).offset().top - offset
   }, 2000)
};

$(touch).on('click', function (e) {
   $(touch).toggleClass('open');
   e.preventDefault();
   menu.slideToggle();
})
$(window).resize(function () {
      var wide = $(window).width();
      if (wide > 768 && menu.is(':hidden')) {
         menu.removeAttr('style');
      }
   })
//COUNTERS
$('.feedback-item').each(function(){
   $this = $(this);
   var $number = $this.find(".feedback-item__counter");
   var value = $number.text();
   $number.text("0");
   $this.one('inview', function(){
        $({
        count: 0
      }).animate({
        count: value
      }, {
        duration: 1500,
        step: function(now) {
          if (value.slice(-1) == "%") {
            $number.text(Math.round(now) + "%");
          } else {
            $number.text(Math.round(now));
          }
        }
      });
   })
})
//END COUNTERS

