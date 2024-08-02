<?php

class ActionContr {
    private $changesContr;
    private $model;
    private $view;
    private $formToShow;
    public function __construct() {
        $this->formToShow = "";
        $this->view = new AdminView();
        $this->model = new AdminModel();
        $this->changesContr = new ChangesContr();
    }


    public function getForm($action) {
        $formToShow = "";
        var_dump($action);
        switch ($action) {
            case 'add-category':
                $formToShow = 'add-category';
                break;
            case 'add-product':
                $formToShow = 'add-product';
                break;
            case 'change-product':
                $formToShow = 'change-product';
                break;
            case 'delete-product':
                $formToShow = 'delete-product';
                break;
            case 'delete-category':
                $formToShow = 'delete-category';
                break;
            case 'add-galery':
                $formToShow = 'add-galery';
                break;
            case 'delete-galery':
                $formToShow = 'delete-galery';
                break;
        }
        return $formToShow;
    }


    public function handleChange($action) {
        switch ($action) {
            case 'add-category-b':
                $categoryName = $_POST['category_name'];
                if (!empty($_POST['category_name'])) {
                    $this->addCategory($categoryName);
                }
                break;
            case 'add-galery-b':
                $this->setGalleryImage();
                break;
            case 'delete-category-b':
                $categoryId = $_POST['category'];
                $this->deleteCategory($categoryId);
                break;
            case 'delete-gallery-b':
                $galleryId = $_POST['galleryId'];
                $this->deleteGallery($galleryId);
                break;
            case 'add-product-b':
                $this->addProduct();
                break;
            case 'delete-product-b':
                $productId = $_POST['productId'];
                $this->deleteProduct($productId);
                break;
            case 'modify-product-b':
                $adminView = new AdminView();
                $product = $this->getProduct();
                $thumbnails = $this->getThumbnails($product['productId']);
                echo $adminView->renderProductForm($product, $thumbnails);
                break;
            case 'update-product-button':
                $this->updateProduct();
                break;
            case 'save-changes':
                $changesContr = new ChangesContr();
                $productsFile = $changesContr->getProductsArray();
                $changesContr->createJsonFile('../products.json', $productsFile);
                $categoriesFile = $changesContr->getProductsByCategories();
                $changesContr->createJsonFile('../categories.json', $categoriesFile);
                $galleryPaths = $changesContr->getGalleryImages();
                $changesContr->createJsonFile('../gallery.json', $galleryPaths);
                $files = glob('../cache/*');
                foreach ($files as $file) {
                    if (is_file($file)) {
                        unlink($file);
                    }
                }
                break;
        }
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
                $fileName = str_replace(' ', '', $fileName);
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
        return count($uploadedFiles) > 1 ? implode(' ', $uploadedFiles) : $uploadedFiles[0] ?? '';
    }


    public function setGalleryImage() {
        $uploadDir = '../uploads/gallery/';
        $uploadedFiles = $this->prepareImages($_FILES['gallPictures'], $uploadDir);
        if (str_contains($uploadedFiles, " ")) {
            $galleryImages = explode(" ", $uploadedFiles);
        } else {
            $galleryImages[] = $uploadedFiles;
        }

        foreach ($galleryImages as $filePath) {
            $trimmedFilePath = substr($filePath, 1);
            $this->model->setGalleryImage($trimmedFilePath);
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
        $trimmedShownImg = substr($shownImg, 1);
        $trimmedDataImg = substr($dataImage, 1);
        $this->model->addProduct($productName, $categoryId, $price, $trimmedShownImg,  $description, $trimmedDataImg);
        $maxId = $this->model->getMaxtId();
        $this->model->setThumbnails($maxId, $trimmedShownImg);
        if (!empty($thumbnails)) {
            $thumbnails = explode(" ", $thumbnails);
            foreach ($thumbnails as $thumbnail) {
                $trimmedThumbnail = substr($thumbnail, 1);
                $this->model->setThumbnails($maxId, $trimmedThumbnail);
            }
        }
        header("Location: admin.php?success=productAdded");
        exit();
    }


    public function updateProduct() {
            $name = $_POST['product-name'];
            $price = $_POST['product-price'];
            $description = $_POST['product-description'];
            $categoryId = $_POST['category'];
            $productId = $_POST['productId'];
            $picture = $_FILES['picture'];
            $additionalPictures = $_FILES['pictures'];
            $dataImage = $_FILES['data-image'];

            $this->model->updateProduct($productId, $name, $price, $description, $categoryId);
            if (isset($picture) && $picture['error'] === UPLOAD_ERR_OK) {
                $picture = $this->prepareImages($picture, '../uploads/products/');
                $trimmedPicturePath = substr($picture, 1);
                $this->model->setThumbnails($productId, $trimmedPicturePath);
                $this->model->updateColumn('products', 'shownImg', $trimmedPicturePath, 'productId', $productId);
            }
    
            if ($dataImage && $dataImage['error'] === UPLOAD_ERR_OK) {
                $dataImage = $this->prepareImages($dataImage, '../uploads/products/');
                $trimmedDataImagePath = substr($dataImage, 1);
                $this->model->updateColumn('products', 'dataImage', $trimmedDataImagePath, 'productId', $productId);
            }
    
            if (!empty($_FILES['pictures']['name'][0])) {
                $thumbnails = $this->prepareImages($additionalPictures, "../uploads/products/");
                if (is_array($thumbnails)) {
                     
                } else {
                    $thumbnails = explode(" ", $thumbnails);
                    foreach ($thumbnails as $thumbnail) {
                        $trimmedThumbnail = substr($thumbnail, 1);
                        $this->model->setThumbnails($productId, $trimmedThumbnail);
                    }
                }
            }

            if (isset($_POST['delete-thumbnails'])) {
                $deleteThumbnails = $_POST['delete-thumbnails'];
                foreach ($deleteThumbnails as $thumbnailId) {
                    $filePath = $this->model->getThumbDeletePath($thumbnailId);
                    $filePath = "." . $filePath;
                    unlink($filePath);
                    echo $filePath;
                    $this->model->deleteThumbnail($thumbnailId);
                }   
            } 
    }

    

    public function getProduct() {
        $id = $_POST['productId'];
        return $this->model->getProductById($id);
    }

    public function getThumbnails($productId) {
        return $this->model->getThumbnails($productId);
    }

    public function setThumbnail($productId, $thumbnail) {
        $this->model->setThumbnails($productId, $thumbnail);
    }


    public function deleteProduct($productId) {
        $product = $this->getProduct();
        $thumbnails = $this->getThumbnails($product['productId']);
        foreach ($thumbnails as $thumbnail) {
            $filePath = $thumbnail['path'];
            $filePath = "." . $filePath;
            unlink($filePath);
            $this->model->deleteThumbnail($thumbnail['tId']);
        }
        $shownImgPath = '.' . $product['shownImg'];
        unlink($shownImgPath);
        $dataImagePath = '.' . $product['dataImage'];
        unlink($dataImagePath);
        $this->model->deleteProduct($productId);
        header("Location: admin.php?success=productDeleted");
        exit();
    }

    public function deleteCategory($categoryId) {
        $products = $this->model->getProductsByCategory($categoryId);
        foreach ($products as $product) {
            $this->deleteProduct($product['productId']);
        }
        $this->model->deleteCategory(($categoryId));
        header("Location: admin.php?success=categoryDeleted");
        exit();
    }

    public function deleteGallery($galleryId) {
        $filePath = $this->model->getGalleryImagePath($galleryId);
        $filePath = '.' . $filePath;
        unlink($filePath);
        $this->model->deleteGalleryImage($galleryId);
        header("Location: admin.php?success=imageDeleted");
        exit();
    }
    
}

