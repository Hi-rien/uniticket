

$('#allagree').click(function() {
  $('.check').prop('checked',this.checked)
})

$('.agrees .check').click(function() {
  if($('#agree1').is(':checked') && $('#agree2').is(':checked') && $('#agree3').is(':checked')) {
    $('#allagree').prop('checked', true)
  } else {
    $('#allagree').prop('checked', false)
  }
})

$('.agree_button').click(function() {
  if($('#agree1').is(':checked') && $('#agree2').is(':checked') && $('#agree3').is(':checked')) {
    $(this).stop().hide()
    nextSec = $(this).parent().next().offset().top - 50
    $('html, body').animate({
      scrollTop: nextSec
    }, 500)
    $('#submit').stop().show()
    $('body').css('overflow','auto')
    return true
  } else {
    alert('모든 약관에 동의해 주세요.')
  }
})

function check_input() {


  // const re1 =/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{6,10}$/;
  const re1 = /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,10}$/;
  const id = document.member_form.id.value;

  if (!document.member_form.id.value) {
    alert('아이디를 입력하세요');
    document.member_form.id.focus()
    return false;
  } else if (!re1.test(id)) {
    alert("6~10자의 영문자, 숫자 혼합해서 사용할 수 있습니다.");
    document.member_form.id.focus()
    return false;
  }

  if (!document.member_form.pass.value) {
    alert("비밀번호를 입력하세요");
    document.member_form.pass.focus();
    return false;
  }

  if (!document.member_form.confirm_pass.value) {
    alert("비밀번호 확인을 입력하세요");
    document.member_form.confirm_pass.focus();
    return false;
  }

  if (document.member_form.pass.value != document.member_form.confirm_pass.value) {
    alert("비밀번호가 일치하지 않습니다.\n다시 입력해주세요.");
    document.member_form.pass.focus()
    document.member_form.pass.select()
    return false;
  }

  if (!document.member_form.name.value) {
    alert("이름을 입력하세요");
    document.member_form.name.focus();
    return false;
  }


  if (!document.member_form.hp.value) {
    alert("휴대폰을 입력하세요");
    document.member_form.hp.focus();
    return false;
  }

  const hp1 = document.member_form.hp.value;
  const re2 = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
  if (!re2.test(hp1)) {
    alert("휴대전화 번호를 다시 입력해주세요.");
    return false
  }


  const email = document.member_form.email.value;
  const re = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

  if (email) {
    if (!re.test(email)) {
      alert("@를 포함해서 입력해주세요");
      return false;
    }
  }

  document.member_form.submit();
}

// 아이디 중복체크

function check_id() {
  id = document.member_form.id.value;
  text = $('#checkId')

  $.post(
    "check_id.php", {
      id: id
    },
    function (data) {
      if (data) {
        text.text(data)
      }
    }
  )
}
