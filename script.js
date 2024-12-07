// validacion del formulario de login
function loguear() {
    let user = document.getElementById("username").value.trim();
    let pass = document.getElementById("password").value.trim();
    let login = document.getElementById("login"); // Seleccionamos el botón

    // Validar si los campos están vacíos
    if (!user && !pass) {
        alert("Por favor, ingrese su usuario y contraseña.");
        return false;
    } else if (!user) {
        alert("Por favor, ingrese su usuario.");
        return false;
    } else if (!pass) {
        alert("Por favor, ingrese su contraseña.");
        return false;
    }

    // Validar usuario y contraseña
    if (user === "Maribel" && pass === "losingenieros123") {
        alert("¡Inicio de sesión exitoso! Cargando...");

        if (login) {
            login.style.display = "none";
        }

        window.location = "home.html";
    } else {
        // Corroborar si los datos son correctos
        if (user !== "Maribel" && pass !== "losingenieros123") {
            alert("Usuario y contraseña incorrectos.");
        } else if (user !== "Maribel") {
            alert("Usuario incorrecto.");
        } else if (pass !== "losingenieros123") {
            alert("Contraseña incorrecta.");
        }
    }
    return false;
}




