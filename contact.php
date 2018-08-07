<?php 
  error_reporting(E_ALL & ~E_NOTICE & ~E_WARNING);
// check data coming from method post 
    if ($_SERVER['REQUEST_METHOD'] == "POST"){
        
      $user = filter_var($_POST['user'], FILTER_SANITIZE_STRING);
      $mail = filter_var($_POST['mails'], FILTER_SANITIZE_EMAIL);
      $phone = filter_var($_POST['phoneN'], FILTER_SANITIZE_NUMBER_INT);
      $msg = filter_var($_POST['message'], FILTER_SANITIZE_STRING);
      $sRecaptcha =false;

		
       $formErrors = array();
      if (strlen("$user") <= 3){
          $formErrors[] = "User name not allow char less than 3"; 
          
          }else {
          
      }
        
        // Validation Number not String and not less than 11
        if (!is_numeric($phone)){
             $formErrors[] = " - phone  should be  Number "; 
             
        }else{
            if (strlen("$phone") != 11 ){
                $formErrors[] = "You should to tpye only 11 Number ...";
                
            }else{
                
            }
        }
               
        
        if (strlen("$msg") <= 15){
          $formErrors[] = "message not allow char less than 15"; 
          }
     $header = " From " .$mail. " \r\n";
        if (empty($formErrors)){
           $successM =  mail("abdelrazek.n4@gmail.com", "My Website", "Name : ".$user."\n From : ".$mail." \n Number Phone : " . $phone."\n Message : \n".$msg , $header);
		   echo 1;
        }else{
			echo json_encode($formErrors);
		}
        
     }
?>
