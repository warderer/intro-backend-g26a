// El modelo trae los datos de la base de datos.
// No se encarga de validar datos, ni de resolver promesas, por que eso es trabajo del controlador en MVC.

// Paso #1 Necesito traer la configuración del entorno de knex y los detalles de conexión a la base de datos.
const knex = require('../config')

// Paso #2 Crear una función que me permita crear un nuevo registro en la tabla homes.

const create = (bodyHome) => {
  return knex
    .insert(bodyHome) // ¿Qué datos voy a insertar?
    .into('homes') // ¿En qué tabla?
    .returning('*') // ¿Qué datos voy a retornar?
}

// Paso #3 Exportar mis funciones para que sean accesibles desde el controlador.

module.exports = {
  create
}