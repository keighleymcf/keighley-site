<?php
header("Access-Control-Allow-Origin: *"); //FIXME
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

//validate inputs
$errors = array();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (empty($_POST['email'])) {
        $errors[] = 'Email is empty';
      } else {
        $email = $_POST['email'];
        // validating the email
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
          $errors[] = 'Invalid email';
        }
      }

    if (empty($_POST['name'])) {
      $errors[] = 'Name is empty';
    } else {
      $name = $_POST['name'];
    }
      
    if (empty($_POST['message'])) {
      $errors[] = 'Message is empty';
    } else {
      $message = $_POST['message'];
    }
}

// send email
if (empty($errors)) {
    $date = date('j, F Y h:i A');
    
    $emailBody = "
    <html>
    <head>
      <title>$name has contacted you via your website</title>
    </head>
    <body>
      <div>
        <p>Date: $date</p>
        <p>Email: $email</p>
        <br>
        <div>Message: <div>$message</div></div>
      </div>
    </body>
    </html>
    ";

    $headers = 	'From: Keighley McFarland <contact@keighleymcfarland.me>' . "\r\n" .
    "Reply-To: $email" . "\r\n" .
    "MIME-Version: 1.0\r\n" . 
    "Content-Type: text/html; charset=iso-8859-1\r\n";
    
    $to = 'contact@keighleymcfarland.me';
    $subject = 'Contact via keighleymcfarland.me';
    
    if (mail($to, $subject, $emailBody, $headers)) {
      $sent = true;	
    }
    }

    ?>
