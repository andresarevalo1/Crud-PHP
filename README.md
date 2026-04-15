<h1 align="center">
  🚀 Sistema de Gestión de Usuarios (CRUD)
</h1>

<p align="center">
  <img src="https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white" alt="PHP">
  <img src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap">
</p>

## 📌 Descripción del Proyecto

Aplicación web enfocada en la gestión de registros (Create, Read, Update, Delete) desarrollada como **prueba técnica/proyecto demostrativo**. Presenta una arquitectura limpia que separa responsabilidades entre el cliente temporal y el servidor, operando de manera 100% asíncrona a través de peticiones AJAX.

Destaca visualmente por una interfaz de usuario moderna implementando una estética **Glassmorphism**, gradientes animados y retroalimentación interactiva e inmediata al usuario.

## ✨ Características Principales

- **Operaciones Asíncronas:** Todo el ciclo de vida de los datos se maneja vía AJAX sin recargar la página.
- **Interfaz Moderna y UX:** Diseño "Glassmorphism", interacciones suaves, alertas auto-descartables y estados *hover* enriquecidos para ofrecer una experiencia superior.
- **Seguridad en Base de Datos:** Uso estricto de **PDO Preparadas** en PHP para la prevención de ataques por inyecciones SQL.
- **Diseño Responsivo:** Completamente adaptable a dispositivos móviles gracias al sistema de grillas de Bootstrap 5.
- **Código Limpio y Comentado:** Fácil mantenimiento y escalabilidad.

## 🛠 Arquitectura y Tecnologías

El sistema sigue un patrón Client-Server simple:

* **Frontend:**
  * HTML5 Semántico
  * CSS3 (Variables, Animaciones CSS, Backdrop-filters)
  * jQuery / Vanilla JavaScript para el consumo del endpoint `api.php`.
* **Backend:**
  * PHP Puro (Vanilla) manejando rutas lógicas a través de un simple controlador *Switch*.
  * Respuestas estandarizadas en formato **JSON**.
* **Base de Datos:**
  * MySQL relacional (`crud_db`).

---

## 🚀 Guía de Instalación y Despliegue

Siga estos pasos para ejecutar la aplicación en un entorno de desarrollo local (como XAMPP, WAMP o Laragon):

### 1. Clonar el Repositorio
```bash
git clone https://github.com/andresarevalo1/Crud-PHP.git
cd Crud-PHP
```

### 2. Configurar la Base de Datos
1. Inicie su servidor Apache y MySQL (ej. a través del Panel de Control de XAMPP).
2. Acceda a su cliente de bases de datos preferido (phpMyAdmin, DBeaver, etc.).
3. Ejecute el script incluido `database.sql` o copie y pegue su contenido en la consola SQL. Esto creará la base de datos `crud_db` y la estructura de la tabla `users` automáticamente.

### 3. Configurar el Entorno Web
- Mueva el proyecto clonado al directorio público de su servidor local (ej. a `C:\xampp\htdocs\` en XAMPP).
- Verifique que los datos de conexión en el archivo `backend/db.php` coincidan con sus credenciales locales:
  ```php
  $host = "localhost";
  $dbname = "crud_db";
  $username = "root";
  $password = ""; // Déjelo vacío si es XAMPP por defecto
  ```

### 4. Ejecución de la App
Abra su navegador web y diríjase a la ruta donde la albergó, por ejemplo:
```
http://localhost/Crud-PHP/
```

---

## 📩 Referencia del API (`api.php`)

La API responde dependiendo del parámetro `action` enviado vía la solicitud GET o POST:

| Acción | Método HTTP | Parámetros Requeridos | Descripción |
| :--- | :--- | :--- | :--- |
| `read` | GET | `action=read` | Retorna todos los usuarios en orden descendente. |
| `get_single` | GET | `action=get_single`, `id` | Retorna la información de un usuario específico. |
| `create` | POST | `name`, `email`, `phone` | Crea un nuevo usuario en la BBDD. |
| `update` | POST | `id`, `name`, `email`, `phone` | Actualiza un registro existente. |
| `delete` | POST | `id` | Elimina de forma permanente el registro. |

---
