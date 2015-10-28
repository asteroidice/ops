<!DOCTYPE html>
<html>
<head>
  <script src="../js/vendor/jquery.js"></script>
  <script>
  /*()$("#Submit").click(function() {
    console.log("Running Script");
    $.post("postJSON.php", {'uName': $("uName").html(), 'password': $("#password").html(), 'JSON': $("#JSON").html()}, function(result){
          console.log(result);
          $("#results").html(result);
      });
  });*/
  function submit() {
    console.log("Running Script");
    $.post("postJSON.php", {'uName': $("#uName").val(), 'password': $("#password").val(), 'JSON': $("#JSON").val()}, function(result){
          console.log(result);
          $("#results").html(result);
      });
  }

  </script>
  <style>
    * {
      font-family: sans-serif;
      font-size: 15px;
    }
    textarea {
      padding: 10px;
      height: 500px;
      width:90%;
    }
    #results{
      margin-top: 20px;
    }
  </style>
</head>
<body>
<textarea name="JSON" id="JSON">
<?php
$myfile = fopen("data.js", "r") or die("Unable to open file!");
echo fread($myfile,filesize("data.json"));
fclose($myfile);
?>
</textarea>
<br>
<input id="uName" value="username"></input>
<input id="password" type="password" value="password"></input>
<button id="Submit" onclick="submit()">Submit</button>
<div id="results"></div>
</body>
</html>
