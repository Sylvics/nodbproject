import React, { Component } from 'react';
import axios from 'axios';
class Getter extends Component{
constructor(props){
    super(props);
    this.state = {
    receivedObj: {},
    nameInp: "",
    name : "",
    title: "",
    race: "",
    charClass: "",
    opinion: "",
    addl: ""
}
}
nameHandle(e){
this.setState({nameInp:e.target.value})

}
getObj(e){
    console.log('fired')
    axios.get(`/api/character/${this.state.nameInp}`).then((res) => {
        let {name, title, race, charClass, opinion,addl} = res.data;
        console.log(res.data)
        this.setState({
            name: name,
            title: title,
            race: race,
            charClass: charClass,
            opinion: opinion,
            addl: addl
        })
    })
        
    // this.state.receivedObj? let {name, title, race, class, opinion, addl} = receivedObj
}
    render () {
        console.log(this.state)
        return (
            <div>
            Search a name?
            <input type='text' onChange={(e)=> this.nameHandle(e)} />
            <button onClick={(e)=> this.getObj(e)}>Search</button>
            <div className="inputDisplay"></div>
          Name: {this.state.name} <br></br>
          Title: {this.state.title} <br></br>
          Race: {this.state.race} <br></br>
          Class: {this.state.charClass}<br></br>
          Opinion on the party:{this.state.opinion}<br></br>
        Additional info:{this.state.addl}

            </div>
        )

    }
}
export default Getter;