

// $('#fullpage').fullpage({
//   licenseKey: 'OPEN-SOURCE-GPLV4-LICENSE',
//   anchors: ['anchor1', 'anchor2', 'anchor3', 'anchor4','anchor5'],
//   menu: '#menu',
//   paddingTop: '110px',
//   paddingBotton: '70px',
//   dragAndMove: false,
//   navigation: true,
//   verticalCentered: false,
//   normalScrollElements: 'body',
// })


$('#header .arrow').click(function() {
  location.href = 'main.html'
})


num = 0

$('button.next').click(function() {

  if(!$('#section1 .time li').hasClass('on')) {
    alert('시간을 선택해 주세요.')
    return false
  }

  if(num >= 4) {
    alert('예매가 완료되었습니다.')
    location.href = "main.html"
  } else {
    num++
    $('#fp-nav ul li').eq(num).trigger('click')
  }


})

$('button.prev').click(function() {
  if(num <= 0) {
    return false
  } else {
    num--
    $('#fp-nav ul li').eq(num).trigger('click')
  }
})

$('#fp-nav ul li').each(function() {
  $(this).click(function() {

    let move = $(this).index()

    $('#fp-nav ul li a').removeClass('active')
    $(this).find('a').addClass('active')

    $('html, body').animate({
      scrollTop: $('#fullpage section').eq(move).offset().top
    }, 1000)
    return num = move
  })

})




$('#section1 .first li').click(function() {
  $('#section1 .first li').removeClass('on')
  $(this).addClass('on')
})

$('#section1 .second li').click(function() {
  $('#section1 .second li').removeClass('on')
  $(this).addClass('on')
})

$('#section1 .time li').click(function() {
  $(this).addClass('on')
})



num1 = 0;

let ticketPrice = $('#section3 .discount_box .base')
let discount = $('#section3 .discount_box .discount').attr('data-discount')
let sumPrice = $('#section3 .sumprice')

$('#section2 .ticket .plus1').click(function() {
  num1++
  totalNum = num1
  $(this).siblings('p').text(num1)
  $('#section2 .total .totalnum').text(totalNum)
  $('#section3 .totalprice .totalnum2').text(totalNum)
  $('#section5 .totalnum').text(totalNum)


  price = $(this).attr('value')
  totalPrice = Number(price * num1)
  totalTh = totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  $('#section2 .total .totalprice').text(totalTh)
  ticketPrice.text(totalTh)
  $('#section5 .bottom .base').text(totalTh)


  discountPrice = totalPrice - Number(discount)
  discountTh = discountPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  $('#section3 .discount_box .price').text(discountTh)

  sumtotal = discountPrice - 2000
  sumtotalth = sumtotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  sumPrice.text(sumtotalth)

})

$('#section2 .ticket .minus1').click(function() {
  if(num1 <= 0) {
    return false
  }
  num1--
  totalNum = num1
  $(this).siblings('p').text(num1)
  $('#section2 .total .totalnum').text(totalNum)
  $('#section3 .totalprice .totalnum2').text(totalNum)
  $('#section5 .totalnum').text(totalNum)


  price = $(this).attr('value')
  totalPrice = Number(price * num1)
  totalTh = totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  $('#section2 .total .totalprice').text(totalTh)
  ticketPrice.text(totalTh)
  $('#section5 .bottom .base').text(totalTh)

  discountPrice = totalPrice - Number(discount)
  discountTh = discountPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  $('#section3 .discount_box .price').text(discountTh)

  sumtotal = totalPrice - 2000
  sumtotalth = sumtotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  sumPrice.text(sumtotalth)
})


$('#section3 .coupon_box .use').click(function() {
  $(this).toggleClass('on')

  let sumPrice = $('#section3 .sumprice').text()

  if($('#section3 .coupon_box .use').hasClass('on')){
    $('#section3 .discount_box .red').addClass('on')
    $('#section3 .discount_box .red .discount').text(2000)

    let disSum = Number(sumPrice.replace(/[^\d]+/g, "")) - 2000
    endSum = disSum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    $('#section3 .totalprice .sumprice').text(endSum)
    $('#section5 .totalprice').text(endSum)
  } else {
    $('#section3 .discount_box .red').removeClass('on')
    $('#section3 .discount_box .red .discount').text(0)
    let plusSum = Number(sumPrice.replace(/[^\d]+/g, "")) + 2000
    endSum = plusSum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    $('#section3 .totalprice .sumprice').text(endSum)
    $('#section5 .totalprice').text(endSum)
  }

  let sale = $('#section3 .discount_box .red .discount').text()
  if (sale == '0') {
    $('#section5 .coupon').text(2000)
    $('#section5 .discount').text(22000)
  } else {
    $('#section5 .coupon').text(0)
    $('#section5 .discount').text(24000)
  }
})


$('#section4 #allagree').click(function() {
  $('#section4 .check').prop('checked',this.checked)
})

$('#section4 .check').click(function() {
  if($('#check1').is(':checked') && $('#check2').is(':checked') && $('#check3').is(':checked')) {
    $('#allagree').prop('checked', true)
  } else {
    $('#allagree').prop('checked', false)
  }
})





let modal=$('#section2 .modal .width .divide')
let modal2=$('#section2 .modal .width .divide2')
let seat = $('#section2 .modal .divide2 .seat .can')

$('#section2>.check>.pre').on('click',function(){
  $("#section2 .modal").css("display","block");
  $(".check .pre").stop().hide();
  $(".check .nex").stop().show();
})

$('#section2>.check>.nex').on('click',function(){
  $("#section2 .modal").css("display","block");
  modal.stop().show();
  modal2.stop().hide();
})


$('.map').on('click',function(){
  modal.stop().hide();
  modal2.stop().show();
})

seat.on('click',function(){
  $(".seat_result").toggleClass('toggle');
  seat.toggleClass('yellow');
  $('.seat_indicator .only').toggleClass('on');

  if(seat.hasClass('yellow')) {
    $(".seat_result").css("display","block");
  } else {
    $(".seat_result").css("display","none");
  }
})

$('.seat_indicator span').click(function(){
  $('.seat_indicator .only').toggleClass('on');
  $(".seat_result").toggleClass('none');
  seat.toggleClass('yellow');
  if($('.seat_indicator .only').hasClass('on')) {
    $(".seat_result").css("display","block");
  } else {
    $(".seat_result").css("display","none");
  }
})



$('.exit').on('click',function(){
  $('#section2 .modal').css('display','none');
})