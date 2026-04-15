<?php
header('Content-Type: application/json');
require_once 'db.php';

$action = 'read';
// Verificamos si viene alguna acción por GET o POST
if (isset($_GET['action'])) {
    $action = $_GET['action'];
} elseif (isset($_POST['action'])) {
    $action = $_POST['action'];
}

switch ($action) {
    case 'read':
        $stmt = $conn->prepare("SELECT * FROM users ORDER BY id DESC");
        $stmt->execute();
        $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode(array("status" => "success", "data" => $users));
        break;

    case 'create':
        $name = $_POST['name'] ?? '';
        $email = $_POST['email'] ?? '';
        $phone = $_POST['phone'] ?? '';

        if (empty($name) || empty($email)) {
            echo json_encode(array("status" => "error", "message" => "El nombre y email son requeridos."));
            break;
        }

        try {
            $stmt = $conn->prepare("INSERT INTO users (name, email, phone) VALUES (:name, :email, :phone)");
            $stmt->execute([':name' => $name, ':email' => $email, ':phone' => $phone]);
            echo json_encode(array("status" => "success", "message" => "Usuario creado exitosamente."));
        } catch (PDOException $e) {
            echo json_encode(array("status" => "error", "message" => "Error al crear: " . $e->getMessage()));
        }
        break;

    case 'update':
        $id = $_POST['id'] ?? '';
        $name = $_POST['name'] ?? '';
        $email = $_POST['email'] ?? '';
        $phone = $_POST['phone'] ?? '';

        if (empty($id) || empty($name) || empty($email)) {
            echo json_encode(array("status" => "error", "message" => "Datos incompletos."));
            break;
        }

        try {
            $stmt = $conn->prepare("UPDATE users SET name=:name, email=:email, phone=:phone WHERE id=:id");
            $stmt->execute([':name' => $name, ':email' => $email, ':phone' => $phone, ':id' => $id]);
            echo json_encode(array("status" => "success", "message" => "Usuario actualizado exitosamente."));
        } catch (PDOException $e) {
            echo json_encode(array("status" => "error", "message" => "Error al actualizar: " . $e->getMessage()));
        }
        break;

    case 'delete':
        $id = $_POST['id'] ?? '';
        if (empty($id)) {
            echo json_encode(array("status" => "error", "message" => "ID no proporcionado."));
            break;
        }

        try {
            $stmt = $conn->prepare("DELETE FROM users WHERE id=:id");
            $stmt->execute([':id' => $id]);
            echo json_encode(array("status" => "success", "message" => "Usuario eliminado exitosamente."));
        } catch (PDOException $e) {
            echo json_encode(array("status" => "error", "message" => "Error al eliminar: " . $e->getMessage()));
        }
        break;

    case 'get_single':
        $id = $_GET['id'] ?? '';
        if (empty($id)) {
            echo json_encode(array("status" => "error", "message" => "ID no proporcionado."));
            break;
        }

        $stmt = $conn->prepare("SELECT * FROM users WHERE id=:id");
        $stmt->execute([':id' => $id]);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);
        echo json_encode(array("status" => "success", "data" => $user));
        break;

    default:
        echo json_encode(array("status" => "error", "message" => "Acción inválida."));
}
?>
