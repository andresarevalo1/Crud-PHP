# Proyecto CRUD PHP con AJAX y Bootstrap

Este es un proyecto desarrollado en respuesta a los requerimientos de crear un sistema **CRUD** (Crear, Leer, Actualizar, Eliminar) robusto usando tecnologías modernas de la web.

## 🛠 Tecnologías Utilizadas
- **Backend:** PHP (Usando **PDO** para la protección contra Inyecciones SQL).
- **Base de Datos:** MySQL.
- **Frontend:** HTML5, y CSS.
- **Framework UI:** Bootstrap 5 (CDN).
- **Lógica de Cliente:** JavaScript puro ayudado de **jQuery** para las peticiones **AJAX**.
- **Iconos:** FontAwesome 6.

## 🚀 Instalación y Ejecución Local
1. Necesitas instalar un entorno como **XAMPP, WAMP o Laragon** en tu PC.
2. Copia la carpeta de este proyecto (`php-crud-app`) dentro de la raíz publica de tu servidor:
   - En XAMPP: Es `C:\xampp\htdocs\`
   - En Laragon: Es `C:\laragon\www\`
3. Ve a `http://localhost/phpmyadmin/` en tu navegador y ejecuta el contenido del script `database.sql` para crear la base de datos `crud_db` y la tabla `users`.
4. Visita en tu navegador: `http://localhost/php-crud-app/` para ver la aplicación funcionando en vivo.

## 📦 Cómo subir tu proyecto a GitHub
Sigue estos pasos en tu terminal (o consola de Git Bash), posicionado en el directorio raíz del proyecto (`C:\Users\Andre\.gemini\antigravity\scratch\php-crud-app`):

1. Inicializa el repositorio local de Git:
   ```bash
   git init
   ```
2. Añade todos los archivos al seguimiento de Git:
   ```bash
   git add .
   ```
3. Registra el primer commit con los cambios:
   ```bash
   git commit -m "Commit Inicial: Agregada aplicacion PHP CRUD con Ajax"
   ```
4. Renombra la rama por defecto a `main`:
   ```bash
   git branch -M main
   ```
5. Enlaza tu repositorio local con el repositorio remoto de GitHub:
   ```bash
   git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
   ```
   *(Asegúrate de crear previamente un repositorio vacío en GitHub y reemplazar la URL de arriba)*
   
6. Empuja los archivos hacia GitHub:
   ```bash
   git push -u origin main
   ```

Una vez que completes estos pasos, tu código estará activo y seguro en repositorios de GitHub.
