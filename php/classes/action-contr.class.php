<?php

class ActionContr {
    private $model;

    public function __construct() {
        $this->model = new AdminModel();
    }


    public function setGalleryImage() {
        $uploadDir = '../uploads/gallery/';
        if (!empty($_FILES['pictures']['name'][0])) {
            foreach ($_FILES['pictures']['name'] as $key => $fileName) {
                $tmpName = $_FILES['pictures']['tmp_name'][$key];
                $uniqueFileName = uniqid() . '-' . basename($fileName);
                $targetFilePath = $uploadDir . $uniqueFileName;
                $fileType = mime_content_type($tmpName);
                if (strpos($fileType, 'image') === false) {
                    echo "The file $fileName is not a valid image.<br>";
                    continue;
                }
                if (move_uploaded_file($tmpName, $targetFilePath)) {
                    $this->model->setGalleryImage($targetFilePath);
                    echo "The file $fileName has been uploaded and saved.<br>";
                } else {
                    echo "There was an error uploading the file $fileName.<br>";
                }
            }
        }
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

    public function deleteCategory($categoryId) {
        $this->model->deleteCategory(($categoryId));
        header("Location: admin.php?success=categoryDeleted");
        exit();
    }

    public function deleteGallery($galleryId) {
        $this->model->deleteGalleryImage($galleryId);
        header("Location: admin.php?success=imageDeleted");
        exit();
    }
}
?>
