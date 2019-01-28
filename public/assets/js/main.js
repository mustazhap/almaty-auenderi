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

    // owl
    $('.owla').owlCarousel({
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

//   
    // var my_calendar = $("#dncalendar-container").dnCalendar({
    //     minDate: "2019-01-01",
    //     maxDate: "2020-12-02",
    //     monthNames: [ "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь" ], 
    //     // monthNamesShort: [ 'Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des' ],
    //     // dayNames: [ 'Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'],
    //     // dayNamesShort: [ 'Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab' ],
    //     dataTitles: { defaultDate: 'default', today : 'hari ini' },
    //     notes: [
    //             { "date": "2019-01-25", "note": ["Natal"] },
    //             { "date": "2016-05-12", "note": ["Tahun Baru"] }
    //             ],
    //     showNotes: false,
    //     dayUseShortName: false,
    //     monthUseShortName: false,
    //     startWeek: 'monday',
    //     dayClick: function(date, view) {
    //         alert(date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear());
    //     }
    // });

    // init calendar
    // my_calendar.build();


    $(window).scroll(function(e){ 
        var $el = $('.fixedElement'); 
        var isPositionFixed = ($el.css('position') == 'fixed');
        // if(isScrolledIntoView($(".footer"))){
        //     $el.css({'position': 'absolute', 'bottom': '0px'}); 
        //   }
        //   else{
        //     $el.css({'position': 'fixed', 'top': '0px'}); 
        //   }
        if ($(this).scrollTop() > 200 && !isPositionFixed){ 
            if(isScrolledIntoView($(".pre-footer"))){
                $el.css({'position': 'absolute', 'bottom': '0px'}); 
                console.log("asss")
            }else{
            $el.css({'position': 'fixed', 'top': '0px'}); 
            }
        }
        if ($(this).scrollTop() < 200 && isPositionFixed){
          $el.css({'position': 'static', 'top': '0px'}); 
        } 
        
       
      });

 function isScrolledIntoView(elem){
     console.log("s");
    var $elem = $(elem);
    var $window = $(window);

    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();

    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

//  Hover on pic
$(".thumb").hover(function(){
    $(".img").attr('src', $(this).attr('rel'));
})

// popup
$(".event__more").click(function(){ //popup call-button
    $(".event__more-pop").show().css("display", "flex");
    $("body").css("overflow", "hidden");
})
$(".fa-times").click(function(){ //popup close-button
    $("body").css("overflow", "auto");
    $(".event__more-pop").hide();
})
$(".event__more-pop").click(function(){ //popup hide on body
    $(this).hide();
    $("body").css("overflow", "auto");
})
$(".event__more-text").click(function(event){ //popup not hide on text
    event.stopPropagation();
})
// popup-end

$('.owlc').owlCarousel({
    loop:true,
    margin:29,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        }
    }
})

$(".staff-detail__thumb").click(function(){ 
    $(".staff-detail__img").attr("src", $(this).attr("rel"));
})

})
