<?php
session_start();

// Redirect if not admin
if ($_SESSION['username'] !== 'admin' || !isset($_SESSION['username'])) {
    header("Location: ../index.html?error=unauthorized");
    exit();
}
include "classes/model.class.php";
include "classes/admin-model.class.php";
include "classes/action-contr.class.php"; 
include "classes/admin-view.class.php";
$adminContr = new ActionContr;

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
        <div class="row my-5">
            <div class="col d-flex justify-content-center"><form action="admin.php" method="post"><button type="submit" class="p-1" name="add-category">Kategória hozzáadása</button></form></div>
            <div class="col d-flex justify-content-center"><form action="admin.php" method="post"><button type="submit" class="p-1" name="add-product">Termék hozzáadása</button></form></div>
            <div class="col d-flex justify-content-center"><form action="admin.php" method="post"><button type="submit" class="p-1" name="change-product">Termék módositása</button></form></div>
            <div class="col d-flex justify-content-center"><form action="admin.php" method="post"><button type="submit" class="p-1" name="delete-product">Termék törlése</button></form></div>
 
        </div>
        <div class="row my-5">
            <div class="col d-flex justify-content-center"><form action="admin.php" method="post"><button type="submit" class="p-1" name="delete-category">Kategória törlése</button></form></div>
            <div class="col d-flex justify-content-center"><form action="admin.php" method="post"><button type="submit" class="p-1" name="add-galery">Galéria kép hozzáadása</button></form></div>
            <div class="col d-flex justify-content-center"><form action="admin.php" method="post"><button type="submit" class="p-1" name="delete-galery">Galéria kép törlése</button></form></div>
        </div>
    </div>
</div>
<?php
$postNames = array(
    "add-category",
    "add-product",
    "change-product",
    "delete-product",
    "delete-category",
    "add-galery",
    "delete-galery"
);


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['add-category'])) {
        $formToShow = 'add-category';
    } elseif (isset($_POST['add-product'])) {
        $formToShow = 'add-product';
    } elseif (isset($_POST['change-product'])) {
        $formToShow = 'change-product';
    } elseif (isset($_POST['delete-product'])) {
        $formToShow = 'delete-product';
    } elseif (isset($_POST['delete-category'])) {
        $formToShow = 'delete-category';
    } elseif (isset($_POST['add-galery'])) {
        $formToShow = 'add-gallery';
    } elseif (isset($_POST['delete-galery'])) {
        $formToShow = 'delete-gallery';
    }

    if (isset($formToShow)) {
        $adminView = new AdminView($formToShow);
        $adminView->renderForm();
    }

    if(isset($_POST['add-category-b'])) {
        $categoryName = $_POST['category_name'];
        $adminContr->addCategory($categoryName);
    }

    if(isset($_POST['add-galery-b'])) {
        $adminContr->setGalleryImage();
    }

    if (isset($_POST['delete-category-b'])) {
        $categoryId = $_POST['category'];
        $adminContr->deleteCategory($categoryId);
    }

    if (isset($_POST['delete-gallery-b'])) {
        $galleryId = $_POST['galleryId'];
        $adminContr->deleteGallery($galleryId);
    }
}





?>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>
</html>


