<?
  session_start();
?>

<meta charset="utf-8">

<?
  $id = $_POST['id'];
  $pass = $_POST['pass'];
  $auto_login = $_POST['auto_login'];

  if(!$id) {
    echo("
      <script>
      window.alert('아이디를 입력하세요.')
      history.go(-1)
      </script>
    ");
    exit;
  }
  
  include "dbinit.php";

  mysqli_query($connect, 'set names utf8');

  $sql = "select * from member where id='$id'";

  $result = mysqli_query($connect, $sql);

  $match = mysqli_num_rows($result);

  if(!$match) {
    echo ("
    <script>
    window.alert('등록되지 않은 아이디 입니다.')
    history.go(-1)
    </script>
    ");
  } else {
    $row = mysqli_fetch_array($result);
    $db_pass = $row['pass'];

    if($pass != $db_pass) {
      echo("
      <script>
      window.alert('비밀번호가 틀립니다.')
      history.go(-1)
      </script>
      ");
      exit;
    } else {

      if($auto_login == 'y') {
        setcookie("c_id",$id,(time()+86400),"/");
      }

      $userid = $row['id'];
      $username = $row['name'];
      $useremail = $row['email'];
      $userhp = $row['hp'];

      $_SESSION['userid'] = $userid;
      $_SESSION['username'] = $username;
      $_SESSION['useremail'] = $useremail;
      $_SESSION['userhp'] = $userhp;

      echo("
      <script>
      window.alert('반갑습니다.');
      location.href = 'main.html';
      </script>
      ");
    }



  }

?>