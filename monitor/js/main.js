
let respuesta = document.getElementById("respuesta");

function callApiRequest() {

    // Make a request for a user with a given ID
    axios.get('http://localhost/iot-car-control/back-end/apis/getRegistro.php')
        .then(function (response) {
            // handle success
            console.log(response);

            let respuestaServidor = 
            response.data == 'w' ? "ADELANTE" : 
            response.data == 's' ? "ATRAS" : 
            response.data == 'a' ? "IZQUIERDA" : 
            response.data == 'd' ? "DERECHA" : "DETENER";


                respuesta.innerHTML = "Última Órden: <strong>" + respuestaServidor + "<strong>";
            

        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });
}


setInterval(callApiRequest, 1000);

