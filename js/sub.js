

$('section .monthly:nth-child(1)~').stop().hide()

$('.month li a').click(function() {
  num = $(this).parent().index()

  $('.indicator li').removeClass('active')
  $('.indicator li').eq(num).addClass('active')

  $('section .monthly').stop().hide()
  $('section .monthly').eq(num).stop().show()
})