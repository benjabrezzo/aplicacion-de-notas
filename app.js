//Importar el módulo Express:
const express = require('express');

//Importamos el archivo .js que simula la base de datos:
const {notas, agregarNota, eliminarNota} = require('./notas.js');

//Creamos una instancia de Express:
const app = express();

// Configuración del middleware para analizar el cuerpo de la solicitud como JSON
app.use(express.json()); //es un middleware incorporado en Express que se utiliza para analizar el cuerpo de las solicitudes entrantes con un tipo de contenido application/json, este middleware se encarga de analizar ese JSON y hacerlo accesible a través de req.body en tus controladores de ruta.

//Definimos una ruta:
app.get('/', (req, res) => {
    res.send('Servidor para la aplicación de notas 🗒️'+JSON.stringify(notas));
}); //Cuando nos conectemos al servidor (poniendo en el navegador: localhost:3000),
    //como respuesta (res) se va a enviar (send) el string ese.


//Ruta para agregar una nueva nota:
app.post('/notas', (req, res) => {
    const nuevaNota = req.body; //Se accede al cuerpo de la solicitud, es decir la nota nueva y se almacena en una constante que esto se va a enviar a la función para agregarla a las notas. El cuerpo de la solicitud es la nueva nota.
    agregarNota(nuevaNota); //Se llama a la función que esta en el .js que simula la base de datos.
    res.json(notas); //Se envia como respuesta el arreglo de notas actualizado.
});

//Ruta para eliminar una nota por su id:
app.delete('/notas/:id', (req, res) => {
    const id = req.params.id;
    eliminarNota(id);
    res.send(JSON.stringify(notas));
});

//Definimos el puerto como una constante:
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Conectados exitosamente al puerto ${PORT}`);    
});


