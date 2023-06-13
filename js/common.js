

$('#nomal').click(function() {
  $('#font_modal').stop().hide()
  $('body').css('overflow','auto')
  localStorage.setItem('fontsize', 'nomal')

  $('body').css({
    "font-size": "13px"
  })
});

$('#big').click(function() {
  $('#font_modal').stop().hide()
  $('body').css('overflow','auto')
  localStorage.setItem('fontsize', 'big')

  $('body').css({
    "font-size": "16px"
  })
});

if(localStorage.getItem('fontsize') == 'nomal') {
  $('body').css({
    "font-size": "13px"
  })
}

if(localStorage.getItem('fontsize') == 'big') {
  $('body').css({
    "font-size": "16px"
  })
}


// 핕터 아이콘 클릭시 글씨 선택 모달창 

$('.filter').click(function(){
  $('#font_modal').stop().show()
  $('body').css('overflow','hidden')
})


  // hamburger menu

  $('.hamburger').click(function() {
    $('#hammenu').stop().animate({
      left: '0'
    },800)

    $('body').css('overflow','hidden')
    $('#menu_modal').stop().fadeIn('slow')
  }) 

  $('#menu_modal').click(function() {
    $('body').css('overflow','auto')
    $('#hammenu').stop().animate({
      left: '-100%'
    },500)
    $('#menu_modal').stop().fadeOut('fast')
  })

  $('#hammenu .close').click(function() {
    $('body').css('overflow','auto')
    $('#hammenu').stop().animate({
      left: '-100%'
    },500)
    $('#menu_modal').stop().fadeOut('fast')
  })


