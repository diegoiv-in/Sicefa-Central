function validar() {
      const username = document.getElementById('usuario').value;
      const password = document.getElementById('contraseña').value;

      if (username === 'admin' && password === 'admin') {
        // Redireccionar a la página deseada
        window.location.href = '../index.html';
        return false; // Prevenir el envío normal del formulario
      } else {
        // Mostrar mensaje de error o realizar alguna otra acción
        Swal.fire('Contraseña incorrecta', 'Intente de nuevo', 'error');
        return false; // Prevenir el envío normal del formulario
      }
    }