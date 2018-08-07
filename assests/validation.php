<?php 
// check data coming from method post 

      $user = filter_var(print "<script>$('#user_send').val();</script>", FILTER_SANITIZE_STRING);
      $mail = filter_var(print"<script>$('#user_send').val();</script>", FILTER_SANITIZE_EMAIL);
      $phone = filter_var(print "<script>$('#user_send').val();</script>", FILTER_SANITIZE_NUMBER_INT);
      $msg = filter_var(print "<script>$('#user_send').val();</script>", FILTER_SANITIZE_STRING);
	echo $user;
  
?>
