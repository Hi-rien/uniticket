
if(localStorage.getItem('fontsize')) {
  $('#font_modal').stop().hide()
} else {
  $('#font_modal').stop().show()
}

// 메인 포스터 배경
let activeBn

function changeBn() {
  setInterval(function() {
    activeBn = $('#main_poster ul .slick-active').find('img').attr('data-back')
    $('#main_poster .back img').attr('src', activeBn)
  })
}

changeBn()



// 메인 포스터 slick

$('#main_poster ul').slick({
  dots: true,
  autoplay: true,
  autoplaySpeed: 5000,
  speed: 1000,
  infinite: true,
  arrows: false,
  centerMode: true,
  variableWidth: true,
})

// 지역행사 & 추천행사 slick

$('.tab_slide .tab').slick({
  arrows: false,
  variableWidth: true,
  infinite: false
})

$('.tab_slide .box ul').slick({
  arrows: false,
  variableWidth: true,
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

  $('#local .box li').each(function() {
    $(this).prepend("<div class='rank'></div>")
    $(this).find('.rank').prepend("<img src='./img/rank_icon.png'>")
    $(this).find('.rank').prepend('<span></span>')

    num = $(this).find('.poster').attr('alt')

    $(this).find('.rank span').text(num)
    
  })


  $('#local .box li').each(function() {
    $(this).find('.content_box').append("<a class='button' href='javascript:void(0)'>바로가기</a>")
  })

  
  // guide click

  $('#guide li a').click(function() {
    $('#guide li a').removeClass('on')
    $(this).addClass('on')
  })

