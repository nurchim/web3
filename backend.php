<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $txHash = $_POST['txHash'];
  file_put_contents('txlog.txt', $txHash . PHP_EOL, FILE_APPEND);
  echo "Logged: $txHash";
}
?>
