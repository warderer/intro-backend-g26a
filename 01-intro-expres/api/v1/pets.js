// const express = require('express');
const { Router } = require('express');

// const router = express.Router();
const router = Router();

const petList = {
  "pets": [
      {
          "id": 1,
          "name": "Firulais",
          "age": 3,
          "type": "dog"
      },
      {
          "id": 2,
          "name": "Michi",
          "age": 2,
          "type": "cat"
      },
      {
          "id": 3,
          "name": "Scooby Doo",
          "age": 6,
          "type": "dog"
      },
  ]
}


router.get('/api/v1/pets', (request, response) => {
  //request es lo que le pedimos al servidor
  //response es lo que nos responde el servidor
  const { type, name, age } = request.query;
  if(!type && !name && !age){
    return response.send(petList);
  }
  // const filteredByType = petList.pets.filter((pet) => pet.type === type);
  // const filteredByName = petList.pets.filter((pet) => pet.name.toLowerCase() === name?.replace('%20', ' ').toLowerCase());
  // const filteredByAge = petList.pets.filter((pet) => pet.age === parseInt(age));

  const filteredPets = petList.pets.filter(pet => pet.age == age || pet.type == type );

  if(filteredPets.length > 0){
    return response.send(filteredPets);
  }

  // if(filteredByType.length > 0){
  //   return response.send(filteredByType);
  // }
  // if(filteredByName.length > 0){
  //   return response.send(filteredByName);
  // }
  // if(filteredByAge.length > 0){
  //   return response.send(filteredByAge);
  // }

  response.send(petList);
})

router.get('/api/v1/pets/:petId', (request, response) => {
  //request es lo que le pedimos al servidor
  //response es lo que nos responde el servidor
  const { petId } = request.params;
  //todo lo que recibamos de request.params es un string
  // 1 === '1' //false
  const pet = petList.pets.find((pet) => pet.id === parseInt(petId));
  if (!pet) {
    return response.status(404).send('Pet not found');
  }else{
    return response.send(pet);
  }
})

module.exports = router;