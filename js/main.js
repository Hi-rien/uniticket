
if(localStorage.getItem('fontsize')) {
  $('#font_modal').stop().hide()
} else {
  $('#font_modal').stop().show()
}

// 메인 포스터 
$('#main_poster ul').slick({
  dots: true,
  speed: 1000,
  autoplay: true,
  autoplaySpeed: 5000,
  infinite: true,
  slidesToScroll: 1,
  arrows: false,
  pauseOnHover: true,
  variableWidth: true,
  centerMode: true,
})

setInterval(function() {
  background = $('#main_slide .slick-list .slick-active').data('back')

  $('#main_poster .background').css({
    backgroundColor : background
  })
},500)

setInterval(function() {
  num =  $('#main_poster .slick-dots .slick-active').index() + 1
  $('.dots_text').text('0'+num)
},500)



// 지역행사 & 추천행사 slick

$('.tab_slide .tab').slick({
  arrows: false,
  variableWidth: true,
  infinite: false
})

$('#monthly .box ul').slick({
  arrows: false,
  variableWidth: true,
  slidesToShow: 2,
})

$('#guide .guide_slick').slick({
  arrows: false,
  variableWidth: true,
  infinite: false,
  slidesToShow: 2,
})

// 지역행사 & 추천행사 tab

$('.tab_slide .contents > li:nth-child(1)~').stop().hide()

$('.tab_slide .tab li').click(function() {
  $(this).siblings().removeClass('on')
  $(this).addClass('on')

  let num = $(this).index()

  $(this).parent().parent().parent().next().find('.box').stop().hide()
  $(this).parent().parent().parent().next().find('.box').eq(num).stop().show()
})


// 지역행사 & 추천행사 inner 포스터 생성

  // $('.contents ul li').each(function() {
  //   $(this).prepend("<img class='mini'>")
  //   src = $(this).find('.poster').attr('src')
  //   $(this).find('.mini').attr('src', src)
  // })

// 지역행사 랭킹 스티커

  // $('#local .box li').each(function() {
  //   $(this).prepend("<div class='rank'></div>")
  //   $(this).find('.rank').prepend("<img src='./img/rank_icon.png'>")
  //   $(this).find('.rank').prepend('<span></span>')

  //   num = $(this).find('.poster').attr('alt')

  //   $(this).find('.rank span').text(num)
    
  // })


  // $('#local .box li').each(function() {
  //   $(this).find('.content_box').append("<a class='button' href='javascript:void(0)'>바로가기</a>")
  // })

  
  // guide click

  $('#guide li a').click(function() {
    $('#guide li a').removeClass('on')
    $(this).addClass('on')
  })

