<?php
class Signup extends Dbh {
    public function setUser($uid, $pwd) {
        $stmt = $this->connect()->prepare('INSERT INTO users (uname, pwd) VALUES (?, ?);');

        $hashedPwd = password_hash($pwd, PASSWORD_DEFAULT);

        if(!$stmt->execute(array($uid, $hashedPwd))) {
            $stmt = null;
            header("Location: ./login.php?error=stmtfailed");
            exit();
        }
    }

    
}