<?php

class Login extends Dbh {
    public function getUser($uid, $pwd) {
        $stmt = $this->connect()->prepare('SELECT * FROM users WHERE uname = ?;');
        
        if (!$stmt->execute([$uid])) {
            header("Location: ./login.php?error=stmtfailed");
            exit();
        }

        if ($stmt->rowCount() == 0) {
            return false;
        }

        $user = $stmt->fetch(PDO::FETCH_ASSOC);


        $checkPwd = password_verify($pwd, $user['pwd']);
        if ($checkPwd === false) {
            return false;
        } else {
            return $user;
        }
    }
}
