<?php
session_start();

// Check if the user is logged in
if (!isset($_SESSION['username'])) {
    header("Location: login.php");
    exit();
}

// Check if the logged-in user is an admin
if ($_SESSION['username'] !== 'admin') {
    header("Location: ../index.html?error=unauthorized");
    exit();
}

// Admin content goes here
echo "Welcome, admin!";
?>
