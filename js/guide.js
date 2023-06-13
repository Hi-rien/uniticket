$('.section .slide_box').slick({
  dots: true,
  autoplay: false,
  speed: 500,
  infinite: false,
  slidesToShow: 1,
  arrows: false,
  centerMode: true,
  variableWidth: true,
})
$('.section2 .slide_box').slick({
  dots: true,
  vertical: true,
  speed: 1300,
  autoplay: false,
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  verticalSwiping: true
})

// 상단 탭메뉴

$('nav li a').click(function () {
  num = $(this).parent().index()

  $('.indicator li').removeClass('active')
  $('.indicator li').eq(num).addClass('active')
})

$('.filter').click(function () {
  $('#font_modal').stop().show()
})


// 애니메이션 적용


function ani1() {
  document.getElementById('cursor').removeEventListener('animationend', ani1)
  document.getElementById('cursor').setAttribute('id', 'move')

  document.getElementById('move').addEventListener('animationend', ani2)
}

function ani2() {
  document.getElementById('move').removeEventListener('animationend', ani2)
  document.getElementById('move').setAttribute('id', 'cursor')

  document.getElementById('cursor').addEventListener('animationend', ani1)
}

document.getElementById('cursor').addEventListener('animationend', ani1)


$('.text p:nth-child(1)~').stop().hide()
// $('.text p').stop().hide()

setInterval(function () {
  num = $('#section1 .slick-dots .slick-active').index()

  $('#section1 .text p').stop().hide()
  $('#section1 .text p').eq(num).stop().show()
})

$('nav li a').click(function (e) {
  e.preventDefault()
  num = $('.indicator .active').index()

  if (num == 0) {
    setInterval(function () {
      num = $('#section1 .slick-dots .slick-active').index()

      $('#section1 .text p').stop().hide()
      $('#section1 .text p').eq(num).stop().show()
    })
  } else if (num == 1) {
    setInterval(function () {
      num2 = $('#section2 .slick-dots .slick-active').index()

      $('#section2 .text p').stop().hide()
      $('#section2 .text p').eq(num2).stop().show()
    })

    $('#cursor2').addClass('move')

    document.querySelector('.move').addEventListener('animationend', function () {
      $('#section2 .slick-dots li').eq(1).find('button').trigger('click')

      setTimeout(function () {
        $('#cursor2').removeClass('move')
      }, 1000)
    })
  }

  $('html, body').animate({
    scrollTop: $('body section').eq(num).offset().top
  }, 1000)

  setTimeout(function() {
    $('section .slick-dots li:nth-child(1)').trigger('click')
  },1000)
})


// font-size 모달창 데이터 저장


$('#nomal').click(function() {
  $('#font_modal').stop().hide()
  localStorage.setItem('fontsize', 'nomal')

  $('body').css({
    "font-size": "13px"
  })
});

$('#big').click(function() {
  $('#font_modal').stop().hide()
  localStorage.setItem('fontsize', 'big')

  $('body').css({
    "font-size": "16px"
  })
});

// font-size 저장된 값으로 body font-size 적용

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


