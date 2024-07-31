<?php

class ChangesContr {
    private $model;

    public function __construct() {
        $this->model = new AdminModel();
    }


    public function createJsonFile($filename, $dataArray) {
        if (file_exists($filename)) {
            unlink($filename);
        }
        $json_data = json_encode($dataArray, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
        if (file_put_contents($filename, $json_data)) {
            echo "File created successfully.";
        } else {
            echo "Failed to create the file.";
        }
        header('Location: admin.php?error=none');
    }

    public function getProducts() {
        return $this->model->getAllProducts();
    }



    public function getProductsArray() {
        $products = $this->getProducts();
        $productsArray = array();
        
        foreach ($products as $product) {
            $thumbnailsData = $this->model->getThumbnails($product['productId']);
            $thumbnails = array_map(function($thumbnail) {
                return $thumbnail['path'];
            }, $thumbnailsData);

            $product['thumbnails'] = $thumbnails;
            $productsArray[] = $product;
        }

        return $productsArray;
    }

    public function getProductsByCategories() {
        $categories = $this->model->getCategories();
        $fullArray = array();
        foreach($categories as $category) {
            $categoryData = array(
                "categoryId" => $category['categoryId'],
                "name" => $category['cName'],
                "products" => array()
            );
            $products = $this->model->getProductsByCategory($category['categoryId']);
            foreach($products as $product) {
                $productData = array(
                    "name" => $product['name'],
                    "price" => $product['price'],
                    "productId" => $product['productId'],
                    "thumbnail" => $product['shownImg']
                );
                $categoryData['products'][] = $productData;
            }
            $fullArray[] = $categoryData;
        }
        return $fullArray;
    }

    public function getGalleryImages() {
        $images = $this->model->getGalleryImages();
        $imagePaths = array();
        foreach ($images as $image) {
            $imagePaths[] = $image['path'];
        }
        return $imagePaths;
    }
}