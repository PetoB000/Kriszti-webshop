<?php

class AdminModel extends Dbh {
    public function addCategory($categoryName) {
        $stmt = $this->connect()->prepare('INSERT INTO categories (name) VALUES (?);');
        $stmt->execute([$categoryName]);
    }

    public function addProduct($productName, $categoryId) {
        $stmt = $this->connect()->prepare('INSERT INTO products (name, category_id) VALUES (?, ?);');
        $stmt->execute([$productName, $categoryId]);
    }

    public function changeProduct($productId, $newName) {
        $stmt = $this->connect()->prepare('UPDATE products SET name = ? WHERE id = ?;');
        $stmt->execute([$newName, $productId]);
    }

    public function deleteProduct($productId) {
        $stmt = $this->connect()->prepare('DELETE FROM products WHERE id = ?;');
        $stmt->execute([$productId]);
    }

    public function deleteCategory($categoryId) {
        $stmt = $this->connect()->prepare('DELETE FROM categories WHERE id = ?;');
        $stmt->execute([$categoryId]);
    }

    public function addGalleryImage($imagePath) {
        $stmt = $this->connect()->prepare('INSERT INTO gallery (image_path) VALUES (?);');
        $stmt->execute([$imagePath]);
    }

    public function deleteGalleryImage($imageId) {
        $stmt = $this->connect()->prepare('DELETE FROM gallery WHERE id = ?;');
        $stmt->execute([$imageId]);
    }

    public function getCategories() {
        $stmt = $this->connect()->prepare('SELECT * FROM categories;');
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_KEY_PAIR);
    }
    
}
?>
