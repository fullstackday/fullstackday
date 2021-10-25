<?php
error_reporting(0);
$name = $_GET["name"];
if (!$name) $name = "World";
?>

<html>
  <body>
    <h1>
      Hello iJS, welcome to 
      <?= $name ?>
    </h1>
  </body>
</html>