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

//   
    var my_calendar = $("#dncalendar-container").dnCalendar({
        minDate: "2019-01-01",
        maxDate: "2020-12-02",
        monthNames: [ "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь" ], 
        // monthNamesShort: [ 'Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des' ],
        // dayNames: [ 'Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'],
        // dayNamesShort: [ 'Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab' ],
        dataTitles: { defaultDate: 'default', today : 'hari ini' },
        notes: [
                { "date": "2019-01-25", "note": ["Natal"] },
                { "date": "2016-05-12", "note": ["Tahun Baru"] }
                ],
        showNotes: false,
        dayUseShortName: false,
        monthUseShortName: false,
        startWeek: 'monday',
        dayClick: function(date, view) {
            alert(date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear());
        }
    });

    // init calendar
    my_calendar.build();

 })