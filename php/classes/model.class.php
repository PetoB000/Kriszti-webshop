<?php

class Dbh {
    public function connect() {
        try {
            $username = "prooktat_PB";
            $password = "argovk;tRG8v";
            $dbh = new PDO('mysql:host=127.0.0.1;dbname=prooktat_PB', $username, $password);
            return $dbh;
        } catch (PDOException $e) {
            print("error!: " . $e->getMessage());
            die();
        }
    }
}
