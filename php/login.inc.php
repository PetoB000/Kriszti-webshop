<?php
session_start();
include "classes/model.class.php";
include "classes/login.class.php";
include "classes/login-contr.class.php";

if (isset($_POST['l-submit'])) {
    $uid = $_POST['l-uid'];
    $pwd = $_POST['l-pwd'];

    $login = new LoginContr($uid, $pwd);

    if ($login->loginUser()) {
        if ($_SESSION["username"] === "admin") {
            header("Location: admin.php");
            exit();
        } else {
            header("Location: ../index.html?login=success");
            exit();
        }
    } else {
        header("Location: ./login.php?error=invalidcredentials");
        exit();
    }
}
?>
