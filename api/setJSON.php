<?php
$enteredUName = $_GET["uName"];
$enteredPassword = $_GET["password"];
$enteredJSON = $_GET["JSON"];

$uName = 'ops4dm1n';
$password = '1v3g0tth3p0w3r';

if (strcmp($enteredPassword , $password ) == 0 && strcmp($enteredUName , $uName ) == 0) {
  $myfile = fopen("data.js", "w") or exit(json_encode("Unable to open file!"));
  fwrite($myfile, $enteredJSON);
  fclose($myfile);
  exit(json_encode("JSON updated"));

} else {

  exit(json_encode("Invalid Credentials"));

}
?>
