let characters = [{name:'zimp', title:'the fool', race:'goblinoid', charClass:'delivery-boy', opinion:'exalted', addl: 'the cutest boy'}];
let id = 1;
module.exports = {
getCharacter: (req, res, next) => {
    console.log(req.params.name)
  let returnedVal =  characters.filter(character => req.params.name === character.name)
  console.log(returnedVal)
    res.status(200).send(returnedVal[0])
},
createNewCharacter: (req, res, next) => {
    let newCharacter = {
        name: req.body.name,
        title: req.body.title,
        race: req.body.race,
        charClass: req.body.charClass,
        opinion: req.body.opinion,
        addl: req.body.addl,
        id: id

    }
    characters.push(newCharacter)
    id++;
    res.sendStatus(200);
},
deleteCharacter: (req, res) =>{
    for (let i = 0; i < characters.length; i++){
        if(characters[i].name === req.params.name)
        {
        characters.splice(i, 1);
        }
        
    }
}

}