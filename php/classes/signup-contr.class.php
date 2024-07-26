<?php

class SignupContr {
    private $uid;
    private $pwd;
    private $pwdr;

    public function __construct($uid, $pwd, $pwdr) {
        $this->uid = $uid;
        $this->pwd = $pwd;
        $this->pwdr = $pwdr;
    }

    public function signupUser() {
        $signup = new Signup();
        if ($this->pwdMatch() == false) {
            header("Location: ./login.php?error=pwdismatch");
            exit();
        }

        if ($this->validateUsername($this->uid) == false) {
            header("Location: ./login.php?error=invalid-username");
            exit();
        }

        if ($this->checkUserExist($this->uid) == false) {
            header("Location: ./login.php?error=username-taken");
            exit();
        }
        $signup->setUser($this->uid, $this->pwd);
    }

    private function pwdMatch() {
        if ($this->pwd !== $this->pwdr) {
            return false;
        }
        return true;
    }

    private function validateUsername($uid) {
        $rules = array(
          'min_length' => 3,
          'max_length' => 32,
          'allowed_chars' => 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_'
        );
      
        if (strlen($uid) < $rules['min_length'] || strlen($uid) > $rules['max_length']) {
          return false;
        }

        if (!preg_match('/^[' . $rules['allowed_chars'] . ']+$/', $uid)) {
          return false;
        }
      
        return true;
      }
      
      protected function checkUserExist($uid) {
        $db = new Dbh;
        $stmt = $db->connect()->prepare('SELECT uname FROM users WHERE uname = ?');
        
        if (!$stmt) {
            header("Location: ./login.php?error=stmtfailed");
            exit();
        }
        
        if (!$stmt->execute([$uid])) {
            header("Location: ./login.php?error=stmtfailed");
            exit();
        }
    
        if ($stmt->rowCount() > 0) {
            return false;
        }
    
        return true;
    }
    
}