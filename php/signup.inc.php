<?php
include "classes/model.class.php";
include "classes/signup.class.php";
include "classes/signup-contr.class.php";



if (isset($_POST["submit"])) {
    $name = $_POST["uid"];
    $pwd = $_POST["pwd"];
    $pwdr = $_POST["pwdrepeat"];

    $signup = new SignupContr($name, $pwd, $pwdr);

    $signup->signupUser();

    header("Location: ../index.php?error=none");

}