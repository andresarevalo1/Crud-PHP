<?php
$host = "localhost";
$dbname = "crud_db";
$username = "root";
$password = "";

try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    // Establecer el modo de error de PDO a exepción
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    die(json_encode(array("status" => "error", "message" => "Conexión fallida: " . $e->getMessage())));
}
?>
