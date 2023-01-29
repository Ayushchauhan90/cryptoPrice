$(document).ready(function(){
    $(".card-content").mouseenter(function(){
        $(".short").css("color","#1074b7")
    })
    $(".card-content").mouseleave(function(){
        $(".short").css("color","#444")
    })
    $(".card-content1").mouseenter(function(){
        $(".short1").css("color","#1074b7")
    })
    $(".card-content1").mouseleave(function(){
        $(".short1").css("color","#444")
    })
    $(".card-content2").mouseenter(function(){
        $(".short2").css("color","#1074b7")
    })
    $(".card-content2").mouseleave(function(){
        $(".short2").css("color","#444")
    })
    $(".card-content3").mouseenter(function(){
        $(".short3").css("color","#1074b7")
    })
    $(".card-content3").mouseleave(function(){
        $(".short3").css("color","#444")
    })
    $(".card-content4").mouseenter(function(){
        $(".short4").css("color","#1074b7")
    })
    $(".card-content4").mouseleave(function(){
        $(".short4").css("color","#444")
    })
      $(".card-content5").mouseenter(function(){
        $(".short5").css("color","#1074b7")
    })
    $(".card-content5").mouseleave(function(){
        $(".short5").css("color","#444")
    })
})
// $(document).ready(function(){
//     $(".btn-btn-show").click(function(){
//       $(".hidden-content").fadeToggle();
//       $(this).text(function(i, text){
//         return text === "Show More" ? "Show Less" : "Show More";
//     })
//     // $('html, body').animate({
//     //     scrollTop: hidden-content.offset().top
//     //  });
//     });
//    });

$(document).ready(function(){
    // resize the slide-read-more Div
    var box = $(".hidden-content");
    var minimumHeight = 487; // max height in pixels
    var initialHeight = box.innerHeight();
    // reduce the text if it's longer than 200px
    if (initialHeight > minimumHeight) {
       box.css('height', minimumHeight);
       $(".read-more-button").show();
    }
    SliderReadMore();
    function SliderReadMore() {
       $(".btn-btn-read-more").on('click', function () {
          // get current height
          var currentHeight = box.innerHeight();
          // get height with auto applied
          var autoHeight = box.css('height', 'auto').innerHeight();
          // reset height and revert to original if current and auto are equal
          var newHeight = (currentHeight | 0) === (autoHeight | 0) ? minimumHeight : autoHeight;
          box.css('height', currentHeight).animate({
             height: (newHeight)
          })
          $('html, body').animate({
             scrollTop: box.offset().top
          });
         $(".btn-btn-read-more").toggle();
       });
    }
 });
   $('.img-sliding').owlCarousel({
    navText:["<i class='fa fa-caret-left' aria-hidden='true'></i>","<i class='fa fa-caret-right' aria-hidden='true'></i>"],
    loop:true,
    autoplay:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:2.12
        },
        600:{
            items:3
        },
        1000:{
            items:4.12
        }
    }
})
$(document).ready(function(){
    $(".question").click(function(){
        $(".buy-bitcoin").slideToggle()
        $(".slide-data").text(function(i, text){
            return text === "–" ? "+" : "–";
        })
    })
    $(".question2").click(function(){
        $(".buy-bitcoin2").slideToggle()
        $(".slide-data2").text(function(i, text){
            return text === "+" ? "–" : "+";
        })
    })
    $(".question3").click(function(){
        $(".buy-bitcoin3").slideToggle()
        $(".slide-data3").text(function(i, text){
            return text === "+" ? "–" : "+";
        })
    })
})