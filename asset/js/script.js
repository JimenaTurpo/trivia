function pintarNombre() {
    let nombreGuardado = localStorage.getItem("name");
    if (nombreGuardado) {
        document.getElementById("saludo").innerHTML = "¡Hola, " + nombreGuardado + "!"; 
    }
}

pintarNombre();

// Función para guardar el nombre en localStorage y redirigir al menú
window.guardarNombre = function() {
    let nombreUsuario = document.getElementById("username").value;
    if (nombreUsuario.trim() !== "") {
        localStorage.setItem("name", nombreUsuario);
        window.location.href = '/Paginas/menu.html'; // Redirecciona al menú
    } else {
        alert("Por favor, introduce un nombre de usuario.");
    }
};

var triviaSaludo = document.getElementById('triviaSaludo');
if (triviaSaludo) {
    var nombre = localStorage.getItem('name');
    if (nombre) {
        triviaSaludo.textContent = '¡Hola, ' + nombre + '!';
    }
}
function loadQuestions() {
    const questionsContainer = document.getElementById("questions-container");
}



let time = 3000; // Tiempo en segundos
const display = document.getElementById('cronometro');

function startTimer(duration, display) {
    let timer = duration;
    const interval = setInterval(function () {
        let minutes = Math.floor(timer / 60); // Calcular minutos restantes
        let seconds = timer % 60; // Calcular segundos restantes

        // Añadir ceros delante si son necesarios para que el formato sea MM:SS
        let minutesString = minutes < 10 ? "0" + minutes : minutes;
        let secondsString = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutesString + ":" + secondsString;
        if (--timer < 0) {
            clearInterval(interval);
            // Redireccionar a la página de trivia cuando el temporizador llegue a cero
            window.location.href = 'trivia.html';
        }
    }, 1000);
}

// Iniciar el temporizador cuando el DOM esté completamente cargado
startTimer(time, display);



const preguntasMultiple = [
    {
        texto:"¿Cuál es el nombre del jefe de la planta nuclear donde trabaja Homer?",
        opciones: ["Carl Burns", "Waylon Smithers","Charles Burns"],
        correcta: 2
    },
    {
        texto:"¿Cuál es el nombre del bar que Homer Simpson visita más a menudo?",
        opciones: ["El bar de Moe","El bar de Roe","El bar de Hoe"],
        correcta: 0
    },
    {
        texto:"¿Cuál es el trabajo de Homer Simpson en la planta nuclear?",
        opciones:["Supervisor de seguridad","Inspector de control de calidad","Operador de reactor"],
        correcta: 2
    }