<?php
	try {
		$connect = new PDO('mysql:host=localhost; dbname=ecommerce', 'root', '');
    $connect->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $connect->exec("SET CHARACTER SET utf8");
		
		echo 'Connected to Database';
	  } catch (PDOException $e) {
		echo $e->getMessage();
	 }
	
	$data = json_decode(file_get_contents("php://input"));
	
	$firstName = $data->firstName;
	$lastName = $data->lastName;
    $username = $data->username;
    $email = $data->email;
	$age = $data->age;
	$gender = $data->gender;
	$pass = $data->pass;

	$pass_crypt = sha1($pass);
    $connect->query("INSERT INTO `usuarios` (`firstName`, `lastName`, `username`, `email`, `password`, `age`, `gender`) VALUES ('".$firstName."','".$lastName."','".$username."','".$email."','".$pass_crypt."','".$age."','".$gender."')") or die(mysql_error());

	$connect = null;
?>