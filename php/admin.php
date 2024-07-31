<?php
session_start();

if ($_SESSION['username'] !== 'admin' || !isset($_SESSION['username'])) {
    header("Location: ./login.php?error=unauthorized");
    exit();
}
include "classes/model.class.php";
include "classes/admin-model.class.php";
include "classes/action-contr.class.php"; 
include "classes/admin-view.class.php";
include "classes/changes-contr.class.php";
$adminContr = new ActionContr;
$view = new AdminView;

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Page</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="admin.css">
</head>
<div class="container d-flex justify-content-center flex-column">
        <div class="row ">
            <a href="../index.html" class="d-flex justify-content-center"><img src="../img/logo3.png" class="w-25 " alt=""></a>
        </div>
        <div class="row m-5">
            <div class="col d-flex justify-content-center"><form action="admin.php" method="post"><button type="submit" name='action' class="p-1" value="add-category">Kategória hozzáadása</button></form></div>
            <div class="col d-flex justify-content-center"><form action="admin.php" method="post"><button type="submit" name='action' class="p-1" value="add-product">Termék hozzáadása</button></form></div>
            <div class="col d-flex justify-content-center"><form action="admin.php" method="post"><button type="submit" name='action' class="p-1" value="change-product">Termék módositása</button></form></div>
            <div class="col d-flex justify-content-center"><form action="admin.php" method="post"><button type="submit" name='action' class="p-1" value="delete-product">Termék törlése</button></form></div>
 
        </div>
        <div class="row m-5">
            <div class="col d-flex justify-content-center"><form action="admin.php" method="post"><button type="submit" name='action' class="p-1" value="delete-category">Kategória törlése</button></form></div>
            <div class="col d-flex justify-content-center"><form action="admin.php" method="post"><button type="submit" name='action' class="p-1" value="add-galery">Galéria kép hozzáadása</button></form></div>
            <div class="col d-flex justify-content-center"><form action="admin.php" method="post"><button type="submit" name='action' class="p-1" value="delete-galery">Galéria kép törlése</button></form></div>
        </div>
        <div class="row m-5">
        <div class="col d-flex justify-content-center"><form action="admin.php" method="post"><button type="submit" name='change-action' class="p-2 fs-3" value="save-changes">Változtatások mentése</button></form></div>
        </div>
    </div>
</div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>
</html>


<?php


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['action'])) {
        $action = $_POST['action'];
        $formToShow = $adminContr->getForm($action);
        echo $view->renderForm($formToShow);
    }
    if (isset($_POST['change-action'])) {
        $changeAction = $_POST['change-action'];
        $adminContr->handleChange($changeAction);
    }
}

?>


