//Bueno obvio necesitamos de Express:
const express = require('express');
//Importamos el archivo donde van a estar las funciones de POST, PUT, DELETE, etc. 
const notasController = require('./notasController');

const path = require('path');


// body-parser es un middleware para Express que analiza los cuerpos de las solicitudes entrantes
// antes de que sean manejadas por los manejadores de rutas. Esto permite acceder fácilmente a los
// datos del cuerpo de la solicitud, como los enviados desde formularios HTML o aplicaciones cliente.
// Sin body-parser, analizar manualmente el cuerpo de la solicitud sería más complicado y propenso a errores.
// body-parser simplifica este proceso y hace que sea mucho más fácil acceder a los datos del cuerpo de la solicitud
// en tu aplicación Express.
const bodyParser = require('body-parser');


//Y aca iniciamos la app con Express:
const app = express();

//Nos conectamos a la base de datos:
const connection = require('./notasdb');

const PORT = 3000;

app.get('/', (req, res) => {
    connection.query('SELECT * FROM notas', (err, results) => {
        if(err){
            console.error('Error al ejecutar la consulta', err);
            return;
        }
        console.log('La db es: ', results);
        res.json(results); 
    });
});

//Este GET muestra el html, es decir cuando ingresamos http://localhost:3000/api/notas. Por que en el POST más abajo no estamos "accediendo a la página", estamos enviando datos para modificar la base de datos.
app.get('/api/notas', (req, res) => {
    const indexPath = path.join(__dirname, './frontend/public/index.html');
    res.sendFile(indexPath);
});




//Creación de una nueva nota:

// Una vez configurado, body-parser analizará los cuerpos de las solicitudes codificadas en URL
// (como los formularios HTML) y hará que los datos estén disponibles en req.body para su acceso
// en tus controladores de ruta de Express.
app.use(bodyParser.urlencoded({ extended: true }));

//Para agregar una nota, es decir, agregar algo nuevo a la BD se utiliza el método POST. 
//Este método, app.post(), se utiliza para definir una ruta en Express que maneja solicitudes POST enviadas por el cliente. Estas solicitudes del cliente, en este caso
//se envian desde un formulario HTML (que se encuentra en la carpeta frontend).
app.post('/api/notas', (req, res) => {
    //Es como si pidieramos por consola la nueva nota, en realidad no es así, pero sirve la analogía.
    const { titulo, contenido } = req.body;
    const nuevaNota = { titulo, contenido };

    notasController.crearNota(nuevaNota, (err, results) => {
        if(err){
            console.error('Error al crear la nota: ', err);
            res.status(500).json({error: 'Error al crear la nota'});
        } else {
            console.log('Nota creada con exito');
            res.status(201).json({message: 'Nota creada con exito'});
        }
    });

});


app.listen(PORT, () => {
    console.log(`Conectados exitosamente al puerto ${PORT}`);
});