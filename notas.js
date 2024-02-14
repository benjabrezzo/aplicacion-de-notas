//Archivo js que simula una base de datos de las notas.

let notas = [
    {
        id: 1,
        titulo: 'Nota 1',
        contenido: 'Contenido de la nota 1'
    },
    {
        id: 2,
        titulo: 'Nota 2',
        contenido: 'Contenido de la nota 2'
    },
    {
        id: 3,
        titulo: 'Nota 3',
        contenido: 'Contenido de la nota 3'
    },
    {
        id: 4,
        titulo: 'Nota 4',
        contenido: 'Contenido de la nota 4'
    },
    {
        id: 5,
        titulo: 'Nota 5',
        contenido: 'Contenido de la nota 5'
    }
];

//Función para agregar una nueva nota:
function agregarNota(nuevaNota){
    notas.push(nuevaNota);
}

//Función para eliminar una nota en base a su id
function eliminarNota(id){
    // Usando el método filter() para crear un nuevo arreglo de notas
    // que excluya la nota con el ID proporcionado
    //notas = notas.filter(nota => nota.id !== id);
    const idNumero = parseInt(id);
    console.log('ID de la nota a eliminar:', id);
    notas = notas.filter(nota => nota.id !== idNumero);
    console.log('Notas después de la eliminación:', notas);


} //Basicamente reemplaza el arreglo de notas con uno nuevo pero filtran la del id pasado como parámetro


module.exports = {
    notas,
    agregarNota,
    eliminarNota
};