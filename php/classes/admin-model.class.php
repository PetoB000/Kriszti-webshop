<?php

class AdminModel extends Dbh {
    public function addCategory($categoryName) {
        $stmt = $this->connect()->prepare('INSERT INTO categories (cName) VALUES (?);');
        $stmt->execute([$categoryName]);
    }

    public function addProduct($productName, $categoryId, $price, $shownImg, $description, $dataImage) {
        $stmt = $this->connect()->prepare('INSERT INTO products (name, categoryId, price, shownImg, description, dataImage) VALUES (?, ?, ?, ?, ?, ?);');
        $stmt->execute([$productName, $categoryId, $price, $shownImg, $description, $dataImage]);
    }


    public function updateProduct($productId, $name, $price, $description, $categoryId) {
        $stmt = $this->connect()->prepare('UPDATE products SET name = ?, price = ?, description = ?, categoryId = ? WHERE productId = ?;');
        $stmt->execute([$name, $price, $description, $categoryId, $productId]);
    }
    

    public function getAllProducts() {
        $stmt = $this->connect()->prepare('SELECT * FROM products ORDER BY categoryId;');
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getProductById($productId) {
        $stmt = $this->connect()->prepare('SELECT * FROM products WHERE productId = ?;');
        $stmt->execute([$productId]);
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    public function getProductsByCategory($categoryId) {
        $stmt = $this->connect()->prepare('SELECT * FROM products WHERE categoryId = ?;');
        $stmt->execute([$categoryId]);
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function updateColumn($table, $columnName, $newColumnValue, $idName, $id) {
        $stmt = $this->connect()->prepare('UPDATE ' . $table . ' SET ' . $columnName . ' = ? WHERE ' . $idName .' = ?;');
        $stmt->execute([$newColumnValue, $id]);
    }


    public function deleteProduct($productId) {
        $stmt = $this->connect()->prepare('DELETE FROM products WHERE productId = ?;');
        $stmt->execute([$productId]);
    }

    public function deleteCategory($categoryId) {
        $stmt = $this->connect()->prepare('DELETE FROM categories WHERE categoryId = ?;');
        $stmt->execute([$categoryId]);
    }

    public function getCategories() {
        $stmt = $this->connect()->prepare('SELECT * FROM categories;');
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function setThumbnails($productId, $thumbnail) {
        $stmt = $this->connect()->prepare('INSERT INTO thumbnails (productId, path) VALUES (?, ?)');
        $stmt->execute([$productId, $thumbnail]);
    }

    public function getMaxtId() {
        $stmt = $this->connect()->prepare('SELECT MAX(productId) as max_id FROM products');
        $stmt->execute();
        $result = $stmt->fetch(PDO::FETCH_DEFAULT);
        if ($result && isset($result['max_id'])) {
            return $result['max_id'];
        }
    }

    public function getThumbnails($productId) {
        $stmt = $this->connect()->prepare('SELECT tId, path FROM thumbnails WHERE productId = ? ORDER BY tId;');
        $stmt->execute([$productId]);
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function deleteThumbnail($thumbnailId) {
        $stmt = $this->connect()->prepare('DELETE FROM thumbnails WHERE tId = ?;');
        $stmt->execute([$thumbnailId]);
    }


    public function getThumbDeletePath($thumbnailId) {
        $stmt = $this->connect()->prepare('SELECT path FROM thumbnails WHERE tId = ?;');
        $stmt->execute([$thumbnailId]);
        return $stmt->fetchColumn();
    }
    

    public function setGalleryImage($imagePath) {
        $stmt = $this->connect()->prepare('INSERT INTO gallery (path) VALUES (?);');
        $stmt->execute([$imagePath]);
    }

    public function deleteGalleryImage($imageId) {
        $stmt = $this->connect()->prepare('DELETE FROM gallery WHERE galleryId = ?;');
        $stmt->execute([$imageId]);
    }

    public function getGalleryImages() {
        $stmt = $this->connect()->prepare('SELECT * FROM gallery;');
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
    
    public function getGalleryImagePath($galleryId) {
        $stmt = $this->connect()->prepare("SELECT path FROM gallery WHERE galleryId = ?");
        $stmt->execute([$galleryId]);
        $result = $stmt->fetch(PDO::FETCH_ASSOC);
        return $result ? $result['path'] : null;
    }

    public function getProductsForJson($categoryId) {
        $stmt = $this->connect()->prepare('SELECT products.productId, products.name, products.price, products.shownImg, categories.cName, categories.categoryId FROM products JOIN categories ON categories.categoryId = ? ;');
        $stmt->execute([$categoryId]);
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    
}
