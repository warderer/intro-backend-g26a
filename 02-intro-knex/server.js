const express = require('express')
// Importar las rutas
const homeRoutes = require('./routes/homeRoutes')

const app = express()

/* Middlewares */
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

/* Rutas */
app.use('/api/v1', homeRoutes)

/* Ponemos el servidor a escuchar */
app.listen(3000, () => {
  console.log('SERVER ON: 3000')
})
