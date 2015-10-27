<!DOCTYPE html>
<html>
<head>
</head>
<body>
<textarea>
<?php
$file = fopen('api/data.js', 'r');
echo fread($file);
fclose($file);
?>
</textarea>
</body>
</html>
