
<meta charset="utf-8">

<? 
if(!$_SESSION['userid']) { 
?>

<div class="first">
  <div class="username">
    <label for="name"><img src="./img/person_icon.png"></label>
    <input type="text" name="name" value="유니티켓">
  </div>
  <div class="userhp">
    <label for="hp"><img src="./img/hp_icon.png"></label>
    <input type="text" name="hp" value="010-1234-1234">
  </div>
</div>
<div class="email">
  <label for="email"><img src="./img/email_icon.png"></label>
  <input type="email" name="email" value="uniticket@uniworld.com">
</div>

<?
} else {
?>

<div class="first">
  <div class="username">
    <label for="name"><img src="./img/person_icon.png"></label>
    <span><?$_SESSION['username']?></span>
  </div>
  <div class="userhp">
    <label for="hp"><img src="./img/hp_icon.png"></label>
    <span><?$_SESSION['userhp']?></span>
  </div>
</div>
<div class="email">
  <label for="email"><img src="./img/email_icon.png"></label>
  <span><?$_SESSION['useremail']?></span>
</div>


<?
}
?>