<?php 
 error_reporting(E_ALL & ~E_NOTICE & ~E_WARNING);
 // error_reporting(E_ALL & ~E_NOTICE & ~E_WARNING); // run all reporting errors except E_NOTICE and E_WARNING
 // use PHPMailer\PHPMailer\PHPMailer; 
 // use PHPMailer\PHPMailer\Exception;
  
  // require 'vendor/phpmailer/phpmailer/src/Exception.php';
  // require 'vendor/phpmailer/phpmailer/src/PHPMailer.php';
  // require 'vendor/phpmailer/phpmailer/src/SMTP.php';
  //Load composer's autoloader
 // require_once 'vendor/autoload.php';
  // mail function and phpMailler isn't runnging free server but running in localhost
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
			  '>W e l c o m e, abdelrazek</div>
			  <div style = '
			  width:100%;
               background-color:#fefefe;
              padding:30px 0 30px 0;
			  '>Name : $user\n <br> $msg\n <br>My Phone ::$phone .<br> My Mail : $mail_user .</div>
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
	  
	    $url = "https://www.google.com/recaptcha/api/siteverify"; 
        $privatekey = "6Lf7mWkUAAAAAMmZlosyH6LLNhQaGacK5fRa2SGR"; 
        $response = file_get_contents($url."?secret=".$privatekey."&response=".$recapcha_response);
        $data = json_decode($response);
        if (isset($data -> success) AND $data -> success == true){
            $sRecaptcha = true;
        }
	     if (strlen($recapcha_response) > 0){
			$sRecaptcha = true;
		 }

	 // Error in inputs fields
		 $formErrors = array();
		 if(!filter_var($mail_user, FILTER_VALIDATE_EMAIL)) {
			$formErrors[]="Email is not corrrect";
      }
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
		
		
		$headers  = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type: text/html; charset=utf-8" . "\r\n";
        $headers .= "From: ".$mail_user. "\r\n";
        $headers .= "Reply-To: ". $mail_user. "\r\n";
        $headers .= "X-Mailer: PHP/" . phpversion();
        $headers .= "X-Priority: 1" . "\r\n";  
		if (empty($formErrors)){
		mail("me@abdelrazek.dx.am", "Website Abdelrazek",$body_msg, $headers);
		 echo 1;
		}else{
			echo (json_encode($formErrors));
		}      
    }
?>
