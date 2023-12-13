const express = require('express')

const app = express()

/* Middlewares */
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

/* Rutas */

/* Ponemos el servidor a escuchar */
app.listen(3000, () => {
  console.log('SERVER ON: 3000')
})
