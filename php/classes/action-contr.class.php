<?php

class ActionContr {
    private $model;

    public function __construct() {
        $this->model = new AdminModel();
    }

    private function prepareImages($files, $uploadDir) {
        $uploadedFiles = [];

        foreach ($files as $file) {
            if (!is_array($files['name'])) {
                $files = array_map(function($value) { return [$value]; }, $files);
            }
        }

        if (!empty($files['name'][0])) {
            foreach ($files['name'] as $key => $fileName) {
                $tmpName = $files['tmp_name'][$key];
                $uniqueFileName = uniqid() . '-' . basename($fileName);
                $targetFilePath = $uploadDir . $uniqueFileName;
                $fileType = mime_content_type($tmpName);

                if (strpos($fileType, 'image') === false) {
                    continue;
                }

                if (move_uploaded_file($tmpName, $targetFilePath)) {
                    $uploadedFiles[] = $targetFilePath;
                }
            }
        }
        return count($uploadedFiles) > 1 ? implode(' ', $uploadedFiles) : ($uploadedFiles[0] ?? '');
    }


    public function setGalleryImage() {
        $uploadDir = '../uploads/gallery/';
        $uploadedFiles = $this->prepareImages($_FILES['pictures'], $uploadDir);
        if (str_contains($uploadedFiles, " ")) {
            $galleryImages = explode(" ", $uploadedFiles);
        } else {
            $galleryImages[] = $uploadedFiles;
        }

        foreach ($galleryImages as $filePath) {
            $this->model->setGalleryImage($filePath);
        }
    }

    
    public function addCategory($categoryName) {
        $this->model->addCategory($categoryName);
        header("Location: admin.php?success=categoryAdded");
        exit();
    }

    public function addProduct() {
        $uploadDir = '../uploads/products/';
        $productName = $_POST['product-name'];
        $categoryId = $_POST['category'];
        $price = $_POST['product-price'];
        $shownImg = $_FILES['picture'];
        $thumbnails = $_FILES['pictures'];
        $description = $_POST['product-description'];
        $dataImage = $_FILES['data-image'];
        $shownImg = $this->prepareImages($shownImg, $uploadDir);
        $thumbnails = $this->prepareImages($thumbnails, $uploadDir);
        $dataImage = $this->prepareImages($dataImage, $uploadDir);
        $this->model->addProduct($productName, $categoryId, $price, $shownImg,  $description, $dataImage);
        $maxId = $this->model->getMaxtId();
        $thumbnails = explode(" ", $thumbnails);
        foreach ($thumbnails as $thumbnail) {
            $this->model->setThumbnails($thumbnail, $maxId);
        }
        header("Location: admin.php?success=productAdded");
        exit();
    }

    

    public function getProduct() {
        $id = $_POST['productId'];
        return $this->model->getProductById($id);
    }

    public function changeProduct() {
        $productId = $_POST['product_id'] ?? 0;
        $newName = $_POST['new_name'];
        $this->model->changeProduct($productId, $newName);
        header("Location: admin.php?success=productChanged");
        exit();
    }

    public function deleteProduct() {
        $productId = $_POST['productId'];
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
        $filePath = $this->model->getGalleryImagePath($galleryId);
        if ($filePath && file_exists($filePath)) {
            unlink($filePath);
        }
        $this->model->deleteGalleryImage($galleryId);
        header("Location: admin.php?success=imageDeleted");
        exit();
    }
    
}
?>
