<?php

    //database code
    $server="localhost";
    $username="root";
    $pass="";

    $conn=mysqli_connect($server,$username,$pass,'PORTFOLIO');

    if(!$conn)
    {   
        echo "Error occurred: ".mysqli_connect_error();
    }
    else{
        // echo "connection done<br>";
    }

    //getting form data
    $email=$_POST['email'];
    $pass=$_POST['pass'];
    $msg=$_POST['msg'];
    $date=date("Y-m-d");

    $create="CREATE TABLE IF NOT EXISTS `portfolio`(`Sr.No` INT AUTO_INCREMENT PRIMARY KEY,`email` VARCHAR(50),`password` VARCHAR(50),`Message` VARCHAR(100), `Date` TEXT);";

    mysqli_query($conn,$create);

    $insert="INSERT INTO `portfolio` (`Email`,`Password`,`Message`,`Date`) VALUES ('$email','$pass','$msg','$date');";

    if(mysqli_query($conn,$insert))
    {
        echo "Values inserted<br>";
    }
?>