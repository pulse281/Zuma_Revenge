const gallerySlider = () => {

  $(document).ready(function(){
    $('.gallery__slider').slick({

      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
      centerMode: true,
      centerPadding: '0',
      arrows: true,
      prevArrow: $('.prev'),
      nextArrow: $('.next'),
      focusOnSelect: true        
    });
  }); 

};

export default gallerySlider;

