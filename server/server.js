const express = require('express')
const bodyParser = require('body-parser')
const controller = require('./controller');

const app = express();
app.use(bodyParser.json());
app.get('/api/character/:name', controller.getCharacter);
app.post('/api/character', controller.createNewCharacter)
app.delete('/api/character/:name', controller.deleteCharacter)




app.listen(4000, () =>{
    console.log('Welcome back, Adventurer! Tavern 4000 is here!')
})

