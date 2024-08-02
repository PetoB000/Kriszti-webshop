<?php



class AdminView {

    public $adminModel;
    public $categories;
    public $galleryImages;
    public $products;

    public function __construct() {
        $this->adminModel = new AdminModel();
        $this->categories = $this->adminModel->getCategories();
        $this->galleryImages = $this->adminModel->getGalleryImages();
        $this->products = $this->adminModel->getAllProducts();
    }

    public function renderForm($formToShow) {
        $formHtml = '';
    
        switch ($formToShow) {
            case 'add-category':
                $formHtml .= '
                <div class="container">
                    <form action="admin.php" method="post">
                        <div class="mb-3">
                            <label for="category-name" class="form-label">Kategória neve</label>
                            <input type="text" class="form-control" id="category-name" name="category_name">
                        </div>
                        <button type="submit" class="btn btn-primary" name="change-action" value="add-category-b">Feltöltés</button>
                    </form>
                </div>';
                break;
    
            case 'add-product':
                $formHtml .= '
                <div class="container">
                    <form action="admin.php" method="post" enctype="multipart/form-data">
                        <div class="mb-3">
                            <label for="product-name" class="form-label">Termék neve</label>
                            <input type="text" class="form-control" id="product-name" name="product-name" required>
                        </div>
                        <div class="mb-3">
                            <label for="product-price" class="form-label">Termék ára</label>
                            <input type="text" class="form-control" id="product-price" name="product-price" required>
                        </div>
                        <p>Sor töréshez másold a mondat végére:<span class="text-danger fs-4"> &lt;br&gt</span> <br>
                        Sor kihagyásához másold a mondat végére: <span class="text-danger fs-4"> &ltbr&gt&ltbr&gt</span></p>
                        <p class="m-0">Példa:<br>Ez a tálca epoxy gyantából, kézzel készült termék, mely egyedi formája miatt igazán különlegessé fogja varázsolni otthonodat.<span class="text-danger fs-4"> &lt;br&gt &lt;br&gt</span> <br><br>
                        Tálcaként is használhatod, tehetsz rá például: gyertyát, ékszert, vázát, kávét, süteményeket, de már önmagában is egy tökéletes dekoráció.<span class="text-danger fs-4"> &ltbr&gt&ltbr&gt</span> <br><br>Fantasztikus ajándékötlet bármilyen alkalomra. Ha személyesebbé szeretnéd tenni, kérhetsz rá feliratot is!<span class="text-danger fs-4"> &ltbr&gt</span> <br>
                        Mérete: 22 cm x 30 cm <span class="text-danger fs-4"> &ltbr&gt&ltbr&gt</span><br><br></p>
                        <div class="form-floating mb-3">
                            <textarea class="form-control" id="floatingTextarea" name="product-description" required style="height: 200px"></textarea>
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
                            <select name="category" id="category" class="form-select">';
    
                foreach ($this->categories as $category) {
                    $formHtml .= '<option value="' . htmlspecialchars($category['categoryId']) . '">' . htmlspecialchars($category['cName']) . '</option>';
                }
    
                $formHtml .= '
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="main-fileUpload" class="form-label">Kosár kép feltöltése</label>
                            <input type="file" name="data-image" id="main-fileUpload" accept="image/*" class="form-control" required>
                        </div>
                        <button type="submit" class="btn btn-primary" name="change-action" value="add-product-b">Feltöltés</button>
                    </form>
                </div>';
                break;
    
            case 'change-product':
                $formHtml .= '<div class="container">';
                $formHtml .= '<div class="row gy-3">'; 
    
                foreach ($this->products as $product) {
                    $formHtml .= '
                    <div class="col-6 col-sm-4 col-md-3 col-lg-2">
                        <form action="admin.php" method="post">
                            <div class="mb-3 text-center"> 
                                <img class="productImg img-fluid" src="'."." . htmlspecialchars($product['shownImg']) . '" alt="" style="height: 250px; object-fit: cover; width: 100%;">
                                <p>' . htmlspecialchars($product['name']) . '</p>
                                <input type="hidden" name="productId" value="' . htmlspecialchars($product['productId']) . '">
                                <button type="submit" class="btn btn-primary mt-2" name="change-action" value="modify-product-b">Módosítás</button>
                            </div>
                        </form>
                    </div>';
                }
    
                $formHtml .= '</div>';
                $formHtml .= '</div>';
                break;
    
            case 'delete-product':
                $formHtml .= '<div class="container">';
                $formHtml .= '<div class="row gy-3">'; 
    
                foreach ($this->products as $product) {
                    $formHtml .= '
                    <div class="col-6 col-sm-4 col-md-3 col-lg-2">
                        <form action="admin.php" method="post">
                            <div class="mb-3 text-center"> 
                                <img class="productImg img-fluid" src="'."." . htmlspecialchars($product['shownImg']) . '" alt="" style="height: 250px; object-fit: cover; width: 100%;">
                                <p>' . htmlspecialchars($product['name']) . '</p>
                                <input type="hidden" name="productId" value="' . htmlspecialchars($product['productId']) . '">
                                <button type="submit" class="btn btn-danger mt-2" name="change-action" value="delete-product-b">Törlés</button>
                            </div>
                        </form>
                    </div>';
                }
    
                $formHtml .= '</div>';
                $formHtml .= '</div>';
                break;
    
            case 'delete-category':
                $formHtml .= '
                <div class="container">
                    <form action="admin.php" method="post">
                        <select name="category" id="category">';
                foreach ($this->categories as $category) {
                    $formHtml .= '<option value="' . htmlspecialchars($category['categoryId']) . '">' . htmlspecialchars($category['cName']) . '</option>';
                }
                $formHtml .= '
                        </select>
                        <button type="submit" class="btn btn-danger" name="change-action" value="delete-category-b">Feltöltés</button>
                    </form>
                </div>';
                break;
    
            case 'add-galery':
                $formHtml .= '
                <div class="container">
                    <form action="admin.php" method="post" enctype="multipart/form-data">
                        <div class="mb-3">
                            <label for="fileUpload" class="form-label">Galéria képek hozzáadása</label>
                            <input type="file" name="gallPictures[]" id="fileUpload" accept="image/*" class="form-control" multiple required>




                        </div>
                        <button type="submit" class="btn btn-primary" name="change-action" value="add-galery-b">Feltöltés</button>
                    </form>
                </div>';
                break;
    
            case 'delete-galery':
                $formHtml .= '<div class="container">';
                $formHtml .= '<div class="row gy-3">'; 
    
                foreach ($this->galleryImages as $image) {
                    $formHtml .= '
                    <div class="col-6 col-sm-4 col-md-3 col-lg-2"> <!-- Responsive column classes -->
                        <form action="admin.php" method="post">
                            <div class="mb-3 text-center"> <!-- Center content within each column -->
                                <img class="galleryImg img-fluid" src="'."."  . htmlspecialchars($image['path']) . '" alt="" style="height: 250px; object-fit: cover; width: 100%;">
                                <input type="hidden" name="galleryId" value="' . htmlspecialchars($image['galleryId']) . '">
                                <button type="submit" class="btn btn-danger mt-2" name="change-action" value="delete-gallery-b">Törlés</button>
                            </div>
                        </form>
                    </div>';
                }
    
                $formHtml .= '</div>';
                $formHtml .= '</div>';
                break;
    
            default:
                $formHtml .= '<div>No form to display</div>' . htmlspecialchars($formToShow);
                break;
        }
    
        return $formHtml;
    }
    

    public function renderProductForm($product, $thumbnails) {
        $formHtml = '
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

                    <textarea class="form-control" id="floatingTextarea" name="product-description" style="height: 200px">' . htmlspecialchars($product['description']) . '</textarea>
                    <label for="floatingTextarea">Termék leírás</label>
                </div>
                <div class="mb-3">
                    <label for="main-fileUpload" class="form-label">Fő kép feltöltése</label>
                    <input type="file" name="picture" id="main-fileUpload" accept="image/*" class="form-control">
                    <img src="'."." . htmlspecialchars($product['shownImg']) . '" alt="Current Image" style="max-width: 100px;">
                </div>
                <div class="mb-3 row">
                    <label for="additional-fileUpload" class="form-label">További képek hozzáadása</label>
                    <input type="file" name="pictures[]" id="additional-fileUpload" accept="image/*" class="form-control" multiple>
                    <label class="form-label">Jelenlegi képek: (A fő képet csak akkor töröld ki innen ha azt meg is változtatod)</label>
                    <div class="row">';
                            foreach ($thumbnails as $thumbnail) {
            $formHtml .= '
                        <div class="col-4">
                            <img src="'."."  . htmlspecialchars($thumbnail['path']) . '" alt="Thumbnail" style="max-width: 100px;">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" name="delete-thumbnails[]" value="' . htmlspecialchars($thumbnail['tId']) . '" id="delete-thumbnail-' . htmlspecialchars($thumbnail['tId']) . '">
                                <label class="form-check-label" for="delete-thumbnail-' . htmlspecialchars($thumbnail['tId']) . '">
                                    Törlés
                                </label>
                            </div>
                        </div>';
        }
            $formHtml .= '</div>
                <div class="mb-3">
                    <label for="category">Termék kategóriája:</label>
                    <select name="category" id="category" class="form-select">';
    
        foreach ($this->categories as $category) {
            $formHtml .= '<option value="' . htmlspecialchars($category['categoryId']) . '">' . htmlspecialchars($category['cName']) . '</option>';
        }
    
        $formHtml .= '
                    </select>
                </div>
                <div class="mb-3">
                    <label for="data-image" class="form-label">Kosár kép feltöltése</label>
                    <input type="file" name="data-image" id="data-image" accept="image/*" class="form-control">
                    <img src="'."." . htmlspecialchars($product['dataImage']) . '" alt="Data Image" style="max-width: 100px;">
                </div> <div>';
    
        $formHtml .= '
                    </div>
                </div>
                <input type="hidden" name="productId" value="' . htmlspecialchars($product['productId']) . '">
                <button type="submit" class="btn btn-primary" name="change-action" value="update-product-button">Feltöltés</button>
            </form>
        </div>';
    
        return $formHtml;
    }
    
    
    
}

