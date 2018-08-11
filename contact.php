<?php 
  error_reporting(E_ALL & ~E_NOTICE & ~E_WARNING); // run all reporting errors except E_NOTICE and E_WARNING
  use PHPMailer\PHPMailer\PHPMailer; 
  use PHPMailer\PHPMailer\Exception;
  //Load composer's autoloader
  require_once 'vendor/autoload.php';
  
// check data coming from method post 
    if ($_SERVER['REQUEST_METHOD'] == "POST"){
		
        // Variables
      $user = filter_var($_POST['user'], FILTER_SANITIZE_STRING);
      $mail_user = filter_var($_POST['mails'], FILTER_SANITIZE_EMAIL);
      $phone = filter_var($_POST['phoneN'], FILTER_SANITIZE_NUMBER_INT);
      $msg = filter_var($_POST['message'], FILTER_SANITIZE_STRING);
	  $recapcha_response = $_POST['recapacha'];
      $sRecaptcha = false;
	  
	  $body_msg = "
	  <center>
		   <div style = '
		     background-color:#f0f0f0;
             height:auto;
             padding: 13px 40px 13px 40px ;
             width:auto;
		   '>
			  <div style = '
			   border-right:#9eae9e 3px solid;
               border-left:#9eae9e  3px solid;
			  '>
			  <div style = ' 
			   padding-top:15px;
               padding-bottom:15px;
               background-color:#9eae9e;
               width:100%;
			  '>W e l c o m e, abdelrazek.dx.am</div>
			  <div style = '
			  width:100%;
               background-color:#fefefe;
              padding:30px 0 30px 0;
			  '>$msg</div>
			  <div style = '
			   color:white;
			   width:100%;
			   background-color:#9eae9e;
			   padding:15px 0 15px 0;
			  '>All Rights Reserved 2018</div>
			  </div>
			  </div>
       </center>
	  ";
	  
	    $url = "https://www.google.com/recaptcha/api/siteverify"; // abdallah :: 6Lf7gWkUAAAAAMSWMDOlIeRd3KSVVI6VdzNZVH0T
        $privatekey = "6Lf7gWkUAAAAAMSWMDOlIeRd3KSVVI6VdzNZVH0T";// dx::  6LcsKUgUAAAAANlyJF6gita2TcpnFi0PfrcuO55z
        $response = file_get_contents($url."?secret=".$privatekey."&response=".$recapcha_response);
        $data = json_decode($response);
        if (isset($data -> success) AND $data -> success == true){
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
		
		// Send  mail by phpMailler
		$mail = new PHPMailer(true);                              // Passing `true` enables exceptions
		try {
			//Server settings
			$mail->SMTPDebug =0;                                  // Enable verbose debug output
			$mail->isSMTP();                                      // Set mailer to use SMTP
			$mail->Host = 'mail.abdelrazek.dx.am';                      // Specify main and backup SMTP servers
			$mail->SMTPAuth = true;                             // Enable SMTP authentication
			$mail->Username = 'me@abdelrazek.dx.am';                 // SMTP username
			$mail->Password = 'newpass123';                    // SMTP password
			$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
			$mail->Port = 587;                                   // TCP port to connect to 587 or 465 for ssl
			
			//Recipients
			$mail->addAddress('abdelrazek.n3@gmail.com');
			$mail->addReplyTo($mail_user, $user);
			$mail->setFrom("me@abdelrazek.dx.am", "abdelrazek.dx.am");
		  
			//Content
			$mail->isHTML(true);                                  // Set email format to HTML
			$mail->Subject = "My Work";
			$mail->Body    = $body_msg;
			$mail->AltBody = "last body";
            $successM = $mail->send();
			
		   
		} catch (Exception $e) {
			
		}
		if (empty($formErrors) && isset($successM) && $successM){
			echo 1;
		}else{
			echo json_encode($formErrors);
		}
        
    }
?>
