<?php
	try {
		$connect = new PDO('mysql:host=localhost; dbname=ecommerce', 'root', '');
    $connect->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $connect->exec("SET CHARACTER SET utf8");
		
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
	try{
	$sql = "INSERT INTO `usuarios` (`firstName`, `lastName`, `username`, `email`, `password`, `age`, `gender`) VALUES ('".$firstName."','".$lastName."','".$username."','".$email."','".$pass_crypt."','".$age."','".$gender."')";
	$connect->query($sql);
		echo "OK";
	}
	catch(PDOException $e){

		$datos = explode("'", $e);
		echo $datos[1];
		echo " ";
		echo $datos[3];
	;
		exit;
}
	$connect = null;
?>