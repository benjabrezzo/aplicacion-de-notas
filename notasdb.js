const mysql = require('mysql2'); //Hay que instalar con: npm install mysql2

//Creamos la conexión a la db:
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '438675075152Benja!',
    database: 'notas_db'
});

//Nos conectamos:
connection.connect(err => {
    if(err) {
        console.log('Error al conectarse a la base de datos:',err);
        return;
    }
    console.log('Conexión exitosa a la base de datos MySQL notas_db');
});

//Exportamos la conexión para usarla en otros archivos
module.exports = connection;