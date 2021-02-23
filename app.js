const argv = require('./config/yargs.js').argv
const porHacer = require('./por-hacer/por-hacer.js')
const comando = argv._[0]
const colors = require('colors/safe')
switch(comando){
    case 'crear':
        console.log(porHacer.crear(argv.descripcion))
        break;
    case 'listar':
        let listado = porHacer.getListado(argv.estado)
        for(let tarea of listado){
            console.log(colors.green("======TAREA=POR=HACER====="))
            console.log(colors.brightCyan(tarea.descripcion))
            console.log("ESTADO = "+ colors.brightCyan(tarea.completado))
            console.log(colors.green("=========================="))
        }
        break;
    case 'actualizar':
        console.log(porHacer.actualizar(argv.descripcion, argv.completado))
        break;
    case 'borrar':
        console.log(porHacer.borrar(argv.descripcion))
        break;
    default:
        console.log("Comando no reconocido")
}