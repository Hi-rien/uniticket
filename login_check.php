<?
  session_start();
?>

<?
  if($_SESSION['userid']) {
    echo ("
      <script>
      document.addEventListener('DOMContentLoaded', function () {
        document.querySelector('.logo').addEventListener('animationend', function() {
        location.href = 'main.html';
        });
      });
      </script>
    ");
  } else if($_COOKIE['c_id']) {
    echo ("
    <script>
    document.addEventListener('DOMContentLoaded', function () {
      document.querySelector('.logo').addEventListener('animationend', function() {
      location.href = 'main.html';
      });
    });
    </script>
    ");
  } else {
    echo("
      <script>
      document.addEventListener('DOMContentLoaded', function () {
        document.querySelector('.logo').addEventListener('animationend', function() {
          document.querySelector('#load').style.display = 'none';
        });
      });

      </script>
    ");
  ?>
<?
}
?>