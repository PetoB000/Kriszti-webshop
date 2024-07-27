<?php

class ActionContr {
    private $model;

    public function __construct() {
        $this->model = new AdminModel();
    }

    public function addCategory() {
        // You might retrieve the category name from a form input
        $categoryName = $_POST['category_name'] ?? 'Default Category';
        $this->model->addCategory($categoryName);
        header("Location: admin.php?success=categoryAdded");
        exit();
    }

    public function addProduct() {
        // Retrieve product details from form inputs
        $productName = $_POST['product_name'] ?? 'Default Product';
        $categoryId = $_POST['category_id'] ?? 1;
        $this->model->addProduct($productName, $categoryId);
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
