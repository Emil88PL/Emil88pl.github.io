<?php

  $name = $_GET['name'];

  $visitor_email = $_GET['email'];

  $message = $_GET['message'];



  $email_from = 'Emil88pl@gmail.com';

  $email_subject = "New Message";

  $email_body = "You have received a new message from the user $name.\n".
                            "Here is the message:\n $message".




  $to = "Emil88pl@gmail.com";

  $headers = "From: $email_from \r\n";

  $headers .= "Reply-To: $visitor_email \r\n";

  mail($to,$email_subject,$email_body,$headers);







function IsInjected($str)
{
    $injections = array('(\n+)',
           '(\r+)',
           '(\t+)',
           '(%0A+)',
           '(%0D+)',
           '(%08+)',
           '(%09+)'
           );
               
    $inject = join('|', $injections);
    $inject = "/$inject/i";
    
    if(preg_match($inject,$str))
    {
      return true;
    }
    else
    {
      return false;
    }
}

if(IsInjected($visitor_email))
{
    echo "Bad email value!";
    exit;
}



?>

