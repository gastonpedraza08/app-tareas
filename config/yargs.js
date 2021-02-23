const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};
const completado = {
    default: true,
    alias: 'c',
    desc: 'actualiza el estado de la tarea'
};

const argv = require('yargs')
    .command('crear', 'crea una tarea por hacer', {
        descripcion 
    })
    .command('actualizar', 'actualiza una tarea', {
        descripcion,
        completado 
    })
    .command('borrar', 'eliminar una tarea por hacer', {
        descripcion
    })
    .command('listar', 'trae una lista de las tareas', {
        estado: {
            alias: 'e'
        }
    })
    .help()
    .argv

module.exports = {
    argv
}