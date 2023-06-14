<?
  session_start();
?>

<?
  if($_SESSION['userid']) {
?>

<a href="./mypage.html" class="user">
  <img src="./img/my_icon.png">
  <span><?=$_SESSION["username"]?> 님</span>
  <img src="./img/arrow_icon.png" alt="arrow">
</a>
<div class="info">
  <a href="./mypage.html">
    <img src="./img/basil_invoice_icon.png" alt="예매내역">
    <span>예매내역</span>
  </a>
  <a href="./mypage.html">
    <img src="./img/favorit_icon.png" alt="관심행사">
    <span>관심행사</span>
  </a>
</div>

<?

  } else if($_COOKIE['c_id']) {

    $userid = $_COOKIE['c_id'];

    include "dbinit.php";

    mysqli_query($connect, 'set names utf8');
  
    $sql = "select * from member where id='$userid'";
    $result = mysqli_query($connect, $sql);
    $row = mysqli_fetch_array($result);
    
    $username = $row['name'];
    $_SESSION['username'] = $username;
?>

<a href="./mypage.html" class="user">
  <img src="./img/my_icon.png">
  <span><?=$_SESSION["username"]?> 님</span>
  <img src="./img/arrow_icon.png" alt="arrow">
</a>
<div class="info">
  <a href="./mypage.html">
    <img src="./img/basil_invoice_icon.png" alt="예매내역">
    <span>예매내역</span>
  </a>
  <a href="./mypage.html">
    <img src="./img/favorit_icon.png" alt="관심행사">
    <span>관심행사</span>
  </a>
</div>

<?
  } else {
?>

<a href="./index.html" class="user">
  <img src="./img/my_icon.png">
  <span>로그인 해주세요.</span>
  <img src="./img/arrow_icon.png" alt="arrow">
</a>

<?
}
?>
