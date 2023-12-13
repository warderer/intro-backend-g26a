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

const findAll = () => {
  return knex
    .select(['house_id', 'title', 'description', 'guests', 'address', 'rental_price', 'fk_user', 'active', 'created_at'])
    .from('homes')
    .where({ active: true }) // Traemos los campos que no hayamos hecho un soft delete
}

const findOne = (houseId) => {
  return knex
    .select(['house_id', 'title', 'description', 'guests', 'address', 'rental_price', 'fk_user', 'active', 'created_at'])
    .from('homes')
    .where({ house_id: houseId })
    .where({ active: true })
}

const update = (houseId, bodyToUpdate) => {
  return knex
    .update(bodyToUpdate)
    .from('homes')
    .where({ house_id: houseId })
    .returning('*')
}

// Voy a borrar un registro de manera REAL de la base de datos
const destroy = (houseId) => {
  return knex
    .del() // delete: Borrar un registro
    .from('homes')
    .where({ house_id: houseId })
}

// Borrado lógico, no se borra el registro de la base de datos, solo se cambia el valor de la columna active a false
const softDelete = (houseId) => {
  return knex
    .update({ active: false })
    .from('homes')
    .where({ house_id: houseId })
}

// Paso #3 Exportar mis funciones para que sean accesibles desde el controlador.
module.exports = {
  create,
  findAll,
  findOne,
  update,
  destroy,
  softDelete
}
