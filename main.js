const express = require('express');
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


app.listen(PORT, () => {
    console.log(`Conectados exitosamente al puerto ${PORT}`);
});