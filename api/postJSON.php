<?php
$enteredUName = $_POST["uName"];
$enteredPassword = $_POST["password"];
$enteredJSON = $_POST["JSON"];

//The valid Credentials
$uName = 'username';
$password = 'password';

if (strcmp($enteredPassword , $password ) == 0 && strcmp($enteredUName , $uName) == 0) {
  //Check if the password is the default one. (because I'm sometimes really tired).
  if(strcmp($enteredPassword , 'password' ) == 0 || strcmp($enteredUName , 'username' ) == 0){
    exit(json_encode('You have not changed the default Username or Password. <br>    1. Get some sleep. <br>    2. Do this in the morning.'));
  }
  $myfile = fopen("data.js", "w") or exit(json_encode("Unable to open file!"));
  fwrite($myfile, $enteredJSON);
  fclose($myfile);
  exit(json_encode("JSON updated"));
} else {
  exit(json_encode("Invalid Credentials"));
}
?>
