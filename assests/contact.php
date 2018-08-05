<?php 
// check data coming from method post 
    if ($_SERVER['REQUEST_METHOD'] == "POST"){
        
      $user = filter_var($_POST['user'], FILTER_SANITIZE_STRING);
      $mail = filter_var($_POST['mail'], FILTER_SANITIZE_EMAIL);
      $phone = filter_var($_POST['phoneN'], FILTER_SANITIZE_NUMBER_INT);
      $msg = filter_var($_POST['message'], FILTER_SANITIZE_STRING);
      $sRecaptcha =false;
   
       $formErrors = array();
      if (strlen("$user") <= 3){
          $formErrors[] = "- User name not allow char less than <strong>3</strong> ..."; 
          
          }else {
          
      }
        
        // Validation Number not String and not less than 11
        if (!is_numeric($phone)){
             $formErrors[] = " - phone number should be <strong> Number </stron> ..."; 
             
        }else{
            if (strlen("$phone") != 11 ){
                $formErrors[] = " - You should to tpye only 11 Number ...";
                
            }else{
                
            }
        }
               
        
        if (strlen("$msg") <= 15){
          $formErrors[] = "- message not allow char less than <strong>15</strong> ..."; 
          }
        
        // start recaptcha 
        
        $url = "https://www.google.com/recaptcha/api/siteverify";
        $privatekey = "6LcsKUgUAAAAANlyJF6gita2TcpnFi0PfrcuO55z";
        $response = file_get_contents($url."?secret=".$privatekey."&response=".$_POST['g-recaptcha-response']."&remoteip=".$_SERVER['PHP_SELF']);
        $data = json_decode($response);
        if (isset($data -> success) AND $data -> success == true){
            $sRecaptcha = true;
        
        }
        // end recaptcha
        
     $header = " From " . $mail . " \r\n";
        if (empty($formErrors) && isset($sRecaptcha) && $sRecaptcha){
           $successM =  mail("abdelrazek.n4@gmail.com", "Contact Me", $msg . " \n Number Phone : " . $phone, $header);
        }
        
     }
?>