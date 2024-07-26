<?php

class Dbh {
    public function connect() {
        try {
            $username = "root";
            $password = "";
            $dbh = new PDO('mysql:host=localhost;dbname=webshop', $username, $password);
            return $dbh;
        } catch (PDOException $e) {
            print("error!: " . $e->getMessage());
            die();
        }
    }
}
