var Header = {
  init: function () {
    // this.aside();
  },
  
};

var Common = {
  init: function () {
    this.common();
     this.datepickerRun();
  },

  common: function () {
    // confirm 모달
    $(document).ready(function(){
      $(window).scroll(function() {
        var scrollTop = $(this).scrollTop();
        if (scrollTop > 200) {
          $('.top-btn').fadeIn(200);
        } else {
          $('.top-btn').fadeOut(200);
        }
      });
      $('.top-btn').click(function() {
        $('html, body').animate({scrollTop : 0}, 400);
        return false;
      });
    })
  },
  datepickerRun: function () {
    // $("[data-picker='date']").datepicker({
    //   dayNamesMin: ["일", "월", "화", "수", "목", "금", "토"],
    //   monthNames: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
    //   monthNamesShort: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
    //   showOtherMonths: false,
    //   //selectOtherMonths: true,
    //   showMonthAfterYear: true,
    //   yearSuffix: "년",
    //   dateFormat: "yy-mm-dd",
    // });
    $(function() {
       // selectbox 커스텀
   
      $('#daterange').daterangepicker({
        autoApply: true, // 범위를 선택하면 자동으로 적용되도록 설정
        opens: 'left', // 달력이 나타날 방향 지정
        locale: {
            format: 'YYYY-MM-DD',
            separator: ' ~ ',
            applyLabel: '적용',
            cancelLabel: '취소',
            fromLabel: '부터',
            toLabel: '까지',
            customRangeLabel: '사용자 정의',
            weekLabel: '주',
            daysOfWeek: ['일', '월', '화', '수', '목', '금', '토'],
            monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
            firstDay: 0
        }
    }, function(start, end, label) {
        console.log('새로운 날짜 범위가 선택되었습니다: ' + start.format('YYYY-MM-DD') + ' ~ ' + end.format('YYYY-MM-DD'));
        // 여기서 선택한 날짜 범위에 대한 작업을 수행할 수 있습니다.
    });
  });
   
  },
};

Header.init();
Common.init();
