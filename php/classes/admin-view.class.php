<?php



class AdminView {
    private $formToShow;
    private $adminModel;
    public $categories;

    public function __construct($formToShow) {
        $this->formToShow = $formToShow;
        $this->adminModel = new AdminModel();
        $this->categories = $this->adminModel->getCategories();
    }

    public function renderForm() {
        switch ($this->formToShow) {
            case 'add-category':
                echo '
                <div id="addCategoryForm">
                    <form action="admin.php" method="post">
                        <h3>Add Category</h3>
                        <input type="text" name="category_name" placeholder="Category Name" required>
                        <button type="submit" name="add-category-b">Submit</button>
                    </form>
                </div>';
                break;

            case 'add-product':
                echo '
                    <div class="container">
                        <form action="your_upload_script.php" method="post" enctype="multipart/form-data">
                            <div class="mb-3">
                                <label for="product-name" class="form-label">Termék neve</label>
                                <input type="text" class="form-control" id="product-name" name="product-name">
                            </div>
                            <div class="mb-3">
                                <label for="product-price" class="form-label">Termék ára</label>
                                <input type="text" class="form-control" id="product-price" name="product-price">
                            </div>
                            <div class="form-floating mb-3">
                                <textarea class="form-control" id="floatingTextarea" name="product-description"></textarea>
                                <label for="floatingTextarea">Termék leírás</label>
                            </div>
                            <div class="mb-3">
                                <label for="main-fileUpload" class="form-label">Fő kép feltöltése</label>
                                <input type="file" name="picture" id="main-fileUpload" accept="image/*" class="form-control" required>
                            </div>
                            <div class="mb-3">
                                <label for="additional-fileUpload" class="form-label">További képek hozzáadása</label>
                                <input type="file" name="pictures[]" id="additional-fileUpload" accept="image/*" class="form-control" multiple>
                            </div>
                            <div class="mb-3">
                                <label for="category">Termék kategóriája:</label>
                                <select name="category" id="category" class="form-select">
                                ';
                                
                foreach ($this->categories as $categoryId => $categoryName) {
                    echo '<option value="' . htmlspecialchars($categoryId) . '">' . htmlspecialchars($categoryName) . '</option>';
                }

                echo '
                                </select>
                            </div>
                            <button type="submit" class="btn btn-primary">Feltöltés</button>
                        </form>
                    </div>';
                    break;

            case 'change-product':
                echo '
                <div id="changeProductForm">
                    <form action="button-handler.inc.php" method="post">
                        <h3>Change Product</h3>
                        <input type="number" name="product_id" placeholder="Product ID" required>
                        <input type="text" name="new_name" placeholder="New Product Name" required>
                        <button type="submit" name="change-product-b">Submit</button>
                    </form>
                </div>';
                break;

            case 'delete-product':
                echo '
                <div id="deleteProductForm">
                    <form action="button-handler.inc.php" method="post">
                        <h3>Delete Product</h3>
                        <input type="number" name="product_id" placeholder="Product ID" required>
                        <button type="submit" name="delete-product-b">Submit</button>
                    </form>
                </div>';
                break;

            case 'delete-category':
                echo '
                        <div class="container">
                          <form action="admin.php" method="post">
                            <select name="category" id="category">';
                            foreach ($this->categories as $categoryId => $categoryName) {
                                echo '<option value="' . htmlspecialchars($categoryId) . '">' . htmlspecialchars($categoryName) . '</option>';
                            }
                            echo '
                            </select>
                            <button type="submit" class="btn btn-danger" name="delete-category-b">Feltöltés</button>
                          </form>
                        </div>';
                break;

            case 'add-gallery':
                echo '
                     <div class="container">
                        <form action="admin.php" method="post" enctype="multipart/form-data">
                            <div class="mb-3">
                                <label for="fileUpload" class="form-label">Galéria képek hozzáadása</label>
                                <input type="file" name="pictures[]" id="fileUpload" accept="image/*" class="form-control" multiple>
                            </div>
                            <button type="submit" class="btn btn-primary" name="add-galery-b">Feltöltés</button>
                        </form>
                    </div>';
                break;

            case 'delete-gallery':
                echo '
                <div id="deleteGalleryForm">
                    <form action="button-handler.inc.php" method="post">
                        <h3>Delete Gallery Image</h3>
                        <input type="number" name="image_id" placeholder="Image ID" required>
                        <button type="submit" name="delete-galery-b">Submit</button>
                    </form>
                </div>';
                break;

            default:
                echo '<div>No form to display</div>' . htmlspecialchars($this->formToShow);
                break;
        }
    }
}
?>
