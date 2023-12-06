function enviarEncuesta() {
    // Obtener datos del formulario
    var edad = document.getElementById('edad').value;
    var sexo = document.getElementById('sexo').value;
    var educacion = document.getElementById('educacion').value;
    var ocupacion = document.getElementById('ocupacion').value;

    // Redirigir a la página de resultados con los parámetros en la URL
    window.location.href = 'resultado-DiegoMedina.html?edad=' + edad +
                           '&sexo=' + sexo +
                           '&educacion=' + educacion +
                           '&ocupacion=' + ocupacion;
}

// Obtener parámetros de la URL y mostrar resultados
var params = new URLSearchParams(window.location.search);
var edad = params.get('edad');
var sexo = params.get('sexo');
var educacion = params.get('educacion');
var ocupacion = params.get('ocupacion');

// Mostrar datos en el contenedor de resultados
document.getElementById('edadResultado').innerText = 'Edad: ' + edad;
document.getElementById('sexoResultado').innerText = 'Sexo: ' + sexo;
document.getElementById('educacionResultado').innerText = 'Nivel de Educación: ' + educacion;
document.getElementById('ocupacionResultado').innerText = 'Ocupación: ' + ocupacion;

