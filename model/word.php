<?php

include_once 'conection.php';

class word {

    public function getAllVerbenId($hola) {
        $db = new dbConnection();
        $conn = $db->connection();
        $query = "select id from word";
        $stmt = $conn->prepare($query);
        $stmt->execute();

        $result = $stmt->setFetchMode(PDO::FETCH_ASSOC);
        return $stmt->fetchAll();
//        foreach ($stmt->fetchAll() as $row) {
//            echo var_dump($row);
//        }
        $conn-=null;
    }

    public function getVerb($id) {
        $db = new dbConnection();
        $conn = $db->connection();
        $query = "select * from word where id=" . $id;
        $stmt = $conn->prepare($query);
        $stmt->execute();

        $result = $stmt->setFetchMode(PDO::FETCH_ASSOC);
        return $stmt->fetchAll();
//        foreach ($stmt->fetchAll() as $row) {
//            echo var_dump($row);
//        }
        $conn-=null;
    }

}
