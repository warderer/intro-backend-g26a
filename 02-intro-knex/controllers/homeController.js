/* Los Controladores tienen la lógica de negocio */

const createHome = (req, res) => {
  // Aquí yo deberia crear mi Home
  res.send({ message: 'Home created (FAKE)' })
}

module.exports = {
  createHome
}
