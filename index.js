// 1- Importar express
const express = require('express');
const petRouter = require('./api/v1/pets');
const cakeRouter = require('./api/v1/cakes');

// 2- Crear una instancia de express
const app = express();

// 3- Configurar mia aplicacion de Express
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 4- Definir las rutas de mi aplicacion
app.get('/', (request, response) => {
  response.send('Hola Mundo');
});
// app.get('/hola', (request, response) => {
//   response.send('Hola Carlos');
// });
// app.get('/adios', (request, response) => {
//   response.send('Adios Carlos');
// });

//6- Importar las rutas de ptrps archivos con ayuda del router de express
app.use(petRouter)
app.use(cakeRouter)


// 5- Levantar el servidor
app.listen(3000,()=>{
  console.log('Servidor escuchando en el puerto 3000');
})