const reviewsSlider = () => {

  $(document).ready(function(){
    $('.reviews__wrapper_mobile').slick({

      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      variableWidth: true,
      centerMode: true,
      centerPadding: '0',
      arrows: false,
      focusOnSelect: true      
    });
  }); 

};

export default reviewsSlider;

