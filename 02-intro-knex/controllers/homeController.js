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

const findAllHomes = (req, res) => {
  ModelHomes.findAll()
    .then(rows => {
      res.status(200).send(rows)
    })
    .catch(err => {
      res.status(400).send(err.message)
    })
}

const findOneHome = (req, res) => {
  ModelHomes.findOne(req.params.idHome)
    .then(row => {
      res.status(200).send(row)
    })
    .catch(err => {
      res.status(400).send(err.message)
    })
}

module.exports = {
  createHome,
  findAllHomes,
  findOneHome
}
