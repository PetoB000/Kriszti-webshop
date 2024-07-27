<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

    <link rel="stylesheet" href="style.css">
</head>
<body>

    <!-- termék hozzáadása -->
    <div class="container">
        <form>
            <div class="mb-3">
              <label for="product-name" class="form-label">Termék neve</label>
              <input type="text" class="form-control" id="product-name" name="product-name">

            </div>
            <div class="mb-3">
              <label for="product-price" class="form-label">Termék ára</label>
              <input type="text" class="form-control" id="product-price" name="product-price">
            </div>
            <div class="form-floating mb-3">
              <textarea class="form-control"  id="floatingTextarea" name="product-description"></textarea>
              <label for="floatingTextarea">Termék leírás</label>
            </div>
            <div class="mb-3">
                <label for="fileUpload" class="form-label">Fő kép feltöltése</label>
                <input type="file" name="picture" id="fileUpload" accept="image/*" class="form-control" required>
            </div>
            <div class="mb-3">
                <label for="fileUpload" class="form-label">További képek hozzáadása</label>
                <input type="file" name="pictures[]" id="fileUpload" accept="image/*" class="form-control">
            </div>
            <div class="mb-3">
            <label for="category">Termék kategóriája:</label>
            <select name="category" id="category">

            </select>
            </div>
            <button type="submit" class="btn btn-primary">Feltöltés</button>
        </form>
    </div>
    <!-- // termék hozzáadása -->

    <!-- Kategória hozzáadása -->
    <div class="container">
        <form>
            <div class="mb-3">
              <label for="category-name" class="form-label">Kategória neve</label>
              <input type="text" class="form-control" id="category-name" name="category-name">
            </div>
            <button type="submit" class="btn btn-primary">Feltöltés</button>
        </form>
    </div>
    <!-- // Kategória hozzáadása -->

</body>
</html>