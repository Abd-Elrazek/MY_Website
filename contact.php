<?php 
  error_reporting(E_ALL & ~E_NOTICE & ~E_WARNING); // run all reporting errors except E_NOTICE and E_WARNING
  use PHPMailer\PHPMailer\PHPMailer; 
  use PHPMailer\PHPMailer\Exception;
// check data coming from method post 
    if ($_SERVER['REQUEST_METHOD'] == "POST"){
		
        // Variables
      $user = filter_var($_POST['user'], FILTER_SANITIZE_STRING);
      $mail = filter_var($_POST['mails'], FILTER_SANITIZE_EMAIL);
      $phone = filter_var($_POST['phoneN'], FILTER_SANITIZE_NUMBER_INT);
      $msg = filter_var($_POST['message'], FILTER_SANITIZE_STRING);
	  $recapcha_response = $_POST['recapacha'];
      $sRecaptcha =false;
	  
	   // start recaptcha 
	  $url = "https://www.google.com/recaptcha/api/siteverify";
	  $privatekey = "6LcsKUgUAAAAANlyJF6gita2TcpnFi0PfrcuO55z";
	  $response = file_get_contents($url."?secret=".$privatekey."&response=".$recapcha_response);
	  $data = json_decode($response);
	  if (isset($data -> success) AND $data -> success == true)
	  {
		$sRecaptcha = true;
	  }
	 

	 // Error in inputs fields
	   $formErrors = array();
		if (strlen("$user") <= 3){
		  $formErrors[] = "User name not allow char less than 3"; 
		}
		// Validation Number not String and not less than 11
		if (strlen("$msg") <= 15){
		  $formErrors[] = "message not allow char less than 15"; 
		}
	    if (!is_numeric($phone)){
			 $formErrors[] = " - phone  should be  Number "; 
		}else{
			if (strlen("$phone") > 16 ){
				$formErrors[] = "Phone should less than 16 Number ...";               
			}
		}
		if (!$sRecaptcha){
		  $formErrors[] = "Fail Recaptcha.."; 
		}
		
		
        
    }
?>
