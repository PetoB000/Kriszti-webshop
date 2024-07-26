
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kriszti Műhelye</title>
    <link rel="website icon" type="png" href="../img/purple-epoxy-resin-icon-cartoon-circle-vector-45522988-removebg.png">
    <link rel="stylesheet" href="style.css">

    <script
    src="https://kit.fontawesome.com/64d58efce2.js"
    crossorigin="anonymous"
  ></script>
</head>
<body>
  <div class="container">
    <div class="login">
        <h4>Bejelentkezés</h4>
        <form action="login.inc.php" method="post">
            <input type="text" name="l-uid" placeholder="Felhasználónév" required>
            <input type="password" name="l-pwd" placeholder="Jelszó" required>
            <br>
            <button type="submit" name="l-submit">Bejelentkezés</button>
        </form>
    </div>
    <div class="signup">
      <h4>Regisztráció</h4>
      <form action="./signup.inc.php" method="post">
          <input type="text" name="uid" placeholder="Felhasználónév" required>
          <input type="password" name="pwd" placeholder="Jelszó" required>
          <input type="password" name="pwdrepeat" placeholder="Jelszó ismetlés" required>
          <br>
          <button type="submit" name="submit">Regisztráció</button>
          
      </form>
    </div>
  </div>
</body>
</html>