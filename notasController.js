//Este archivo tendra las funciones de POST, PUT, DELETE y la que haga falta. Se podría hacer todas en notasdb.js, pero para ser más organizado las puse acá.
//Para hacerlo tengo que importar la conexión a la bd.
const connection = require('./notasdb');

function crearNota(nuevaNota, callback){
    connection.query('INSERT INTO notas SET ?', nuevaNota, callback);
}

//Exportamos esto para usarlo en cualquier archivo, aunque en esta aplicación solo lo haremos en main.js
module.exports = { crearNota };