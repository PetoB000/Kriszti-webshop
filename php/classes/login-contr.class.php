<?php

class LoginContr {
    private $uid;
    private $pwd;

    public function __construct($uid, $pwd) {
        $this->uid = $uid;
        $this->pwd = $pwd;
    }

    public function loginUser() {
        $login = new Login();
        $user = $login->getUser($this->uid, $this->pwd);

        if ($user === false) {
            return false;
        } else {
            $_SESSION['userid'] = $user['id'];
            $_SESSION['username'] = $user['uname'];
            return true;
        }
    }
}
