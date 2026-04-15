$(document).ready(function() {
    
    // Función para mostrar alertas temporales
    function showMessage(type, message) {
        let alertBox = $('#alertMessage');
        alertBox.removeClass('alert-success alert-danger d-none');
        alertBox.addClass(type === 'success' ? 'alert-success' : 'alert-danger');
        alertBox.text(message).fadeIn();
        
        setTimeout(function() {
            alertBox.fadeOut();
        }, 3000);
    }

    // Leer registros (Read)
    function fetchUsers() {
        $.ajax({
            url: 'backend/api.php',
            type: 'GET',
            data: { action: 'read' },
            dataType: 'json',
            success: function(response) {
                let tbody = $('#userTableBody');
                tbody.empty();
                
                if (response.status === 'success') {
                    let users = response.data;
                    if (users.length === 0) {
                        tbody.append('<tr><td colspan="5" class="text-center">No hay usuarios registrados.</td></tr>');
                    } else {
                        $.each(users, function(index, user) {
                            let tr = `
                                <tr>
                                    <td>${user.id}</td>
                                    <td>${user.name}</td>
                                    <td>${user.email}</td>
                                    <td>${user.phone || '-'}</td>
                                    <td class="text-center">
                                        <button class="btn btn-sm btn-warning btnEdit" data-id="${user.id}">
                                            <i class="fas fa-edit"></i>
                                        </button>
                                        <button class="btn btn-sm btn-danger btnDelete" data-id="${user.id}">
                                            <i class="fas fa-trash-alt"></i>
                                        </button>
                                    </td>
                                </tr>
                            `;
                            tbody.append(tr);
                        });
                    }
                } else {
                    showMessage('error', response.message);
                }
            },
            error: function() {
                showMessage('error', 'Error al conectarse con el servidor HTTP.');
            }
        });
    }

    // Instanciar carga
    fetchUsers();

    // Resetear formulario al abrir modal de "Nuevo Registro"
    $('#btnAdd').click(function() {
        $('#userForm')[0].reset();
        $('#userId').val('');
        $('#action').val('create');
        $('#modalTitle').text('Nuevo Usuario');
        
        // Colores del modal
        $('.modal-header').removeClass('bg-warning text-dark').addClass('bg-primary text-white');
        $('#btnSave').removeClass('btn-warning').addClass('btn-primary').text('Guardar');
    });

    // Enviar el formulario para Crear (Create) o Actualizar (Update)
    $('#userForm').submit(function(e) {
        e.preventDefault(); // prevenir recarga
        
        let formData = $(this).serialize();
        
        $.ajax({
            url: 'backend/api.php',
            type: 'POST',
            data: formData,
            dataType: 'json',
            success: function(response) {
                if (response.status === 'success') {
                    $('#userModal').modal('hide');
                    showMessage('success', response.message);
                    fetchUsers(); // Recargar tabla
                } else {
                    showMessage('error', response.message);
                }
            },
            error: function() {
                showMessage('error', 'Ocurrió un error en la solicitud.');
            }
        });
    });

    // Cargar datos en formulario para Editar (Update Parte 1)
    $(document).on('click', '.btnEdit', function() {
        let id = $(this).data('id');
        
        $.ajax({
            url: 'backend/api.php',
            type: 'GET',
            data: { action: 'get_single', id: id },
            dataType: 'json',
            success: function(response) {
                if(response.status === 'success') {
                    let user = response.data;
                    $('#userId').val(user.id);
                    $('#name').val(user.name);
                    $('#email').val(user.email);
                    $('#phone').val(user.phone);
                    $('#action').val('update'); // Cambiamos la accion a update
                    
                    $('#modalTitle').text('Editar Usuario');
                    $('.modal-header').removeClass('bg-primary').addClass('bg-warning text-dark');
                    $('#btnSave').removeClass('btn-primary').addClass('btn-warning').text('Actualizar');
                    
                    $('#userModal').modal('show');
                } else {
                    showMessage('error', response.message);
                }
            }
        });
    });

    // Eliminar Registro (Delete)
    $(document).on('click', '.btnDelete', function() {
        if(confirm('¿Estás seguro de que deseas eliminar permanentemente a este usuario?')) {
            let id = $(this).data('id');
            
            $.ajax({
                url: 'backend/api.php',
                type: 'POST',
                data: { action: 'delete', id: id },
                dataType: 'json',
                success: function(response) {
                    if (response.status === 'success') {
                        showMessage('success', response.message);
                        fetchUsers(); // Recargar lista
                    } else {
                        showMessage('error', response.message);
                    }
                }
            });
        }
    });

});
