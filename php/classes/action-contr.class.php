<?php

class ActionContr {
    private $model;

    public function __construct() {
        $this->model = new AdminModel();
    }

    public function addCategory($categoryName) {
        $this->model->addCategory($categoryName);
        header("Location: admin.php?success=categoryAdded");
        exit();
    }

    public function addProduct() {
        $productName = $_POST['product_name'];
        $categoryId = $_POST['category_id'];
        $price = $_POST['product_price'];
        $description = $_POST['product_description'];
        $shownImg = $_POST['shownImg'];
        $thumbnails = $_POST['thumbnails'];
        $dataImage = $_POST['dataImage'];
        $this->model->addProduct($productName, $categoryId, $price, $shownImg, $thumbnails, $description, $dataImage);
        header("Location: admin.php?success=productAdded");
        exit();
    }

    public function changeProduct() {
        $productId = $_POST['product_id'] ?? 0;
        $newName = $_POST['new_name'] ?? 'Updated Product';
        $this->model->changeProduct($productId, $newName);
        header("Location: admin.php?success=productChanged");
        exit();
    }

    public function deleteProduct() {
        $productId = $_POST['product_id'] ?? 0;
        $this->model->deleteProduct($productId);
        header("Location: admin.php?success=productDeleted");
        exit();
    }

    public function deleteCategory() {
        $categoryId = $_POST['category_id'] ?? 0;
        $this->model->deleteCategory($categoryId);
        header("Location: admin.php?success=categoryDeleted");
        exit();
    }

    public function addGallery() {
        $imagePath = $_POST['image_path'] ?? 'default.jpg';
        $this->model->addGalleryImage($imagePath);
        header("Location: admin.php?success=imageAdded");
        exit();
    }

    public function deleteGallery() {
        $imageId = $_POST['image_id'] ?? 0;
        $this->model->deleteGalleryImage($imageId);
        header("Location: admin.php?success=imageDeleted");
        exit();
    }
}
?>
