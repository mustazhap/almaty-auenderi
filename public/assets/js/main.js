 $(document).ready(function(){
     $(".header__lang-button").click(function(event){
         $(this).find("img").toggleClass("button-active")
         if($(this).next().css("display") == "flex"){
            $(this).next().css("display", "none");
         }else{
            $(this).next().css("display", "flex");
         }
        event.stopPropagation();

     })

     $(".header__lang-languages").click(function(event){
        event.stopPropagation();
    })

    $("body").click(function(){
        $(".header__lang-languages").css("display", "none")
        $(".header__lang-button").find("img").removeClass("button-active")
    })

    $('.owl-carousel').owlCarousel({
      loop:false,
      margin:0,
      nav:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1000:{
              items:4
          }
      }
  })
 })