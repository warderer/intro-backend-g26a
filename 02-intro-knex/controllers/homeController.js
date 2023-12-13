/* Los Controladores tienen la lógica de negocio */
const ModelHomes = require('../models/Homes')

const createHome = (req, res) => {
  // Aquí yo deberia crear mi Home
  // res.send({ message: 'Home created (FAKE)' })
  ModelHomes.create(req.body)
    .then(row => {
      res.status(201).send(row)
    })
    .catch(err => {
      res.status(400).send(err.message)
    })
}

module.exports = {
  createHome
}
