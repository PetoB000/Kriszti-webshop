<?php



class AdminView {
    private $formToShow;
    public $adminModel;
    public $categories;
    public $galleryImages;
    public $products;

    public function __construct($formToShow) {
        $this->formToShow = $formToShow;
        $this->adminModel = new AdminModel();
        $this->categories = $this->adminModel->getCategories();
        $this->galleryImages = $this->adminModel->getGalleryImages();
        $this->products = $this->adminModel->getAllProducts();
    }

    public function renderForm() {

        switch ($this->formToShow) {
            case 'add-category':
                echo '
                <div class="container">
                    <form action="admin.php" method="post">
                        <div class="mb-3">
                          <label for="category-name" class="form-label">Kategória neve</label>
                          <input type="text" class="form-control" id="category-name" name="category_name">
                        </div>
                        <button type="submit" class="btn btn-primary" name="add-category-b">Feltöltés</button>
                    </form>
                </div>';
                break;

            case 'add-product':
                echo '
                    <div class="container">
                        <form action="admin.php" method="post" enctype="multipart/form-data">
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
                            <div class="mb-3">
                                <label for="main-fileUpload" class="form-label">Kosár kép feltöltése</label>
                                <input type="file" name="data-image" id="main-fileUpload" accept="image/*" class="form-control" required>
                            </div>
                            </div>
                            <button type="submit" class="btn btn-primary" name="add-product-b">Feltöltés</button>
                        </form>
                    </div>';
                    break;

                    case 'change-product':
                        echo '<div class="container">';
                        echo '<div class="row gy-3">'; 
                        
                        foreach ($this->products as $product) {
                            echo '
                            <div class="col-6 col-sm-4 col-md-3 col-lg-2">
                                <form action="admin.php" method="post">
                                    <div class="mb-3 text-center"> 
                                        <img class="productImg img-fluid" src="' . htmlspecialchars($product['shownImg']) . '" alt="" style="height: 250px; object-fit: cover; width: 100%;">
                                        <p>' . htmlspecialchars($product['name']) . '</p>
                                        <input type="hidden" name="productId" value="' . htmlspecialchars($product['productId']) . '">
                                        <button type="submit" class="btn btn-primary mt-2" name="modify-product-b">Módosítás</button>
                                    </div>
                                </form>
                            </div>';
                        }
                    
                        echo '</div>';
                        echo '</div>';
                        break;
                    

                case 'delete-product':
                    echo '<div class="container">';
                    echo '<div class="row gy-3">'; 
                
                    foreach ($this->products as $product) {
                        echo '
                        <div class="col-6 col-sm-4 col-md-3 col-lg-2">
                            <form action="admin.php" method="post">
                                <div class="mb-3 text-center"> 
                                    <img class="productImg img-fluid" src="' . htmlspecialchars($product['shownImg']) . '" alt="" style="height: 250px; object-fit: cover; width: 100%;">
                                    <p>' . htmlspecialchars($product['name']) . '</p>
                                    <input type="hidden" name="productId" value="' . htmlspecialchars($product['productId']) . '">
                                    <button type="submit" class="btn btn-danger mt-2" name="delete-product-b">Törlés</button>
                                </div>
                            </form>
                        </div>';
                    }
                
                    echo '</div>';
                    echo '</div>';
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
                echo '<div class="container">';
                echo '<div class="row gy-3">'; 

                foreach ($this->galleryImages as $image) {
                    echo '
                    <div class="col-6 col-sm-4 col-md-3 col-lg-2"> <!-- Responsive column classes -->
                        <form action="admin.php" method="post">
                            <div class="mb-3 text-center"> <!-- Center content within each column -->
                                <img class="galleryImg img-fluid" src="' . htmlspecialchars($image['path']) . '" alt="" style="height: 250px; object-fit: cover; width: 100%;">
                                <input type="hidden" name="galleryId" value="' . htmlspecialchars($image['galleryId']) . '">
                                <button type="submit" class="btn btn-danger mt-2" name="delete-gallery-b">Törlés</button>
                            </div>
                        </form>
                    </div>';
                }

                echo '</div>';
                echo '</div>';
                break;

            default:
                echo '<div>No form to display</div>' . htmlspecialchars($this->formToShow);
                break;
        }
    }

    public function renderProductForm($product) {
        echo '
        <div class="container">
            <form action="admin.php" method="post" enctype="multipart/form-data">
                <div class="mb-3">
                    <label for="product-name" class="form-label">Termék neve</label>
                    <input type="text" class="form-control" id="product-name" name="product-name" value="' . htmlspecialchars($product['name']) . '">
                </div>
                <div class="mb-3">
                    <label for="product-price" class="form-label">Termék ára</label>
                    <input type="text" class="form-control" id="product-price" name="product-price" value="' . htmlspecialchars($product['price']) . '">
                </div>
                <div class="form-floating mb-3">
                    <textarea class="form-control" id="floatingTextarea" name="product-description">' . htmlspecialchars($product['description']) . '</textarea>
                    <label for="floatingTextarea">Termék leírás</label>
                </div>
                <div class="mb-3">
                    <label for="main-fileUpload" class="form-label">Fő kép feltöltése</label>
                    <input type="file" name="picture" id="main-fileUpload" accept="image/*" class="form-control">
                    <img src="' . htmlspecialchars($product['shownImg']) . '" alt="Current Image" style="max-width: 100px;">
                </div>
                <div class="mb-3">
                    <label for="additional-fileUpload" class="form-label">További képek hozzáadása</label>
                    <input type="file" name="pictures[]" id="additional-fileUpload" accept="image/*" class="form-control" multiple>
                </div>
                <div class="mb-3">
                    <label for="category">Termék kategóriája:</label>
                    <select name="category" id="category" class="form-select">'; 
                    foreach ($this->categories as $categoryId => $categoryName) {
                        echo '<option value="' . htmlspecialchars($categoryId) . '">' . htmlspecialchars($categoryName) . '</option>';
                        }  
                        echo'
                    </select>
                </div>
                <div class="mb-3">
                    <label for="data-image" class="form-label">Kosár kép feltöltése</label>
                    <input type="file" name="data-image" id="data-image" accept="image/*" class="form-control">
                    <img src="' . htmlspecialchars($product['dataImage']) . '" alt="Data Image" style="max-width: 100px;">
                </div>
                <input type="hidden" name="productId" value="' . htmlspecialchars($product['id']) . '">
                <button type="submit" class="btn btn-primary" name="update-product-b">Feltöltés</button>
            </form>
        </div>';
    }
    
}

// TODO INSERT THE THUMBNAIL PICTURES INTO THE RENDER PRODUCT FORM