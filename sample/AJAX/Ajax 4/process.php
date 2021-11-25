<?php

// Connect to a dabase
$conn = mysqli_connect('localhost', 'root', 'havana00root', 'ajaxtest');




echo 'Processing...';


// Check fot POST variable
if(isset($_POST['name'])) {
    $name = mysqli_real_escape_string($conn, $_POST['name']);
    // echo 'POST: Your name is '. $_POST['name'];

    $query = "INSERT INTO users(name) VALUES('$name')";

    if(mysqli_query($conn, $query)) {
        echo ' User Added...';
    } else {
        echo 'Error: '.mysqli_error($conn);
    }

}

// Check fot GET variable
if(isset($_GET['name'])) {
    echo 'GET: Your name is '. $_GET['name'];
}


?>
