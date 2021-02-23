const fs = require('fs')

let tareasPorHacer = []

const guardarData = () => {
    let data = JSON.stringify(tareasPorHacer)
    fs.writeFile('./db/data.json', data, (err) => {
        if(err) throw err
        console.log("Archivo modificad con exito")
    })
}

const cargarData = () => {
    try {
        tareasPorHacer = require('../db/data.json')
    } catch (error) {
        tareasPorHacer = []
    }
}

const crear = (descripcion) => {

    cargarData()
    let porHacer = {
        descripcion,
        completado: false
    }
    tareasPorHacer.push(porHacer)
    guardarData()
    return porHacer
}

const getListado = (completado) => {
    cargarData()
    if(completado===undefined){
        return tareasPorHacer
    }
    arr = tareasPorHacer.filter((item) => {
        return `${item.completado}` == completado
    })
    return arr 
}

const getIndex = (descripcion) => {
    let ind = tareasPorHacer.findIndex((item) => {
        return item.descripcion===descripcion
    })
    return ind
}
const actualizar = (descripcion, completado = true) => {
    cargarData()
    let index = getIndex(descripcion)
    if(index===-1) return false
    tareasPorHacer[index].completado = completado
    guardarData()
    return true
}

const borrar = (descripcion) => {
    cargarData()
    let index = getIndex(descripcion)
    if(index===-1) return false
    tareasPorHacer.splice(index, 1)
    guardarData()
    return true
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}