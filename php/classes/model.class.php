<?php

class Dbh {
    public function connect() {
        try {
            $username = "root";
            $password = "";
            $dbh = new PDO('mysql:host=127.0.0.1;dbname=webshop', $username, $password);
            return $dbh;
        } catch (PDOException $e) {
            print("error!: " . $e->getMessage());
            die();
        }
    }
}
