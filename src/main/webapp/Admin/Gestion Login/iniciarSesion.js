function validar() {
            const username = document.getElementById('usuario').value;
            const password = document.getElementById('contraseña').value;

            if (username === 'admin' && password === 'admin') {
                // Redireccionar a la página deseada
                window.location.href = '../index.html';
                return false; // Prevenir el envío normal del formulario
            } else {
                Swal.fire({
                    icon: 'warning',
                    text: 'Contraseña incorrecta, Intente de nuevo!',
                    button: "Aceptar"
                });
                return false; // Prevenir el envío normal del formulario
            }
        }