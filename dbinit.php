<?

  $connect = mysqli_connect("localhost","uniticket","uni0630#") or
  die("SQL server에 연결할 수 없습니다.");
  mysqli_select_db($connect,"uniticket");

?>