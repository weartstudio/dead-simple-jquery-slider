(function($) {
  const dss = $('#sliderName');
  $(document).ready(function() {
    dss_main();
  });


  // slider function
  function dss_main(){
    console.log('vvv')
    dss.addClass('dss');
    dss_next();
    dss_prev();
    dss.children().addClass('dss_item');
    dss.prepend('<button class="dss_prev">&larr;</button><button class="dss_next">&rarr;</button>')
  }

  // next
    function dss_next(){
      console.log(dss)
      dss.find('.dss_next').on(click, function(){
        dss.find('.active').removeClass('active').next().addClass('active');
      });
      dss_ppagination_exist();
    }
  // end

  // prev
    function dss_prev(){
      dss.find('.dss_prev').on(click, function(){
        dss.find('.active').removeClass('active').prev().addClass('active');
      });
      dss_ppagination_exist(dss);
    }
  // end

  // pagination exist
    function dss_ppagination_exist(){
      // is next item exist?
        if(!dss.find('.active').prev().is('.dss_item')){
          $('#forecast .prev').hide();
        }else{
          $('#forecast .prev').show();
        }

      // is prev item exist?
        if(!dss.find('.active').next().is('.dss_item')){
          dss.find('.dss_next').hide();
        }else{
          dss.find('.dss_next').show();
        }

    }
  // end
})