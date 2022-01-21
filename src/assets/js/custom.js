$(function(){
	// Add minus icon for collapse element which is open by default
    $(".collapse.show").each(function () {
        $(this)
          .prev(".card-header")
          .find(".fa")
          .addClass("fa-minus")
          .removeClass("fa-plus");
      });
    
      // Toggle plus minus icon on show hide of collapse element
      $(".collapse")
        .on("show.bs.collapse", function () {
          $(this)
            .prev(".card-header")
            .find(".fa")
            .removeClass("fa-plus")
            .addClass("fa-minus");
        })
        .on("hide.bs.collapse", function () {
          $(this)
            .prev(".card-header")
            .find(".fa")
            .removeClass("fa-minus")
            .addClass("fa-plus");
        });

        /* all slider start */
    $('.vdo_sliders').slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
        nextArrow:'.slidNext_1',
      prevArrow:'.slidPrv_1',
      dots: true,
        responsive: [
  {
      breakpoint: 992,
      settings: {
        arrows: false,
        centerMode: false,
        centerPadding: '15px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: false,
        centerPadding: '0px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 1
      }
    }
  ]
    });
});