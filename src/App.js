import React, { Component } from 'react';
import './reset.css';
import './App.css';
import axios from 'axios';
import './Components/visibility.js'
import Getter from './Components/getter.js'


class App extends Component {
  constructor(){
    super();
    this.state = {
      userInputCharacter: {},
      userInputName: "",
      userInputTitle: "",
      userInputRace: "",
      userInputClass: "",
      userInputOpinion: "",
      userInputAddl: "",
      charArray: []
    }
  }
  handleName(e){
    this.setState({
      userInputName: e.target.value
    })

  }
  handleTitle(e){
    this.setState({
      userInputTitle: e.target.value
    })


  }
  handleRace(e){
    this.setState({
      userInputRace: e.target.value
    })


  }
  handleClass(e){
    this.setState({
      userInputClass: e.target.value
    })


  }
  handleOpinion(e){
    this.setState({
      userInputOpinion: e.target.value
    })


  }
  handleAddl(e){
    this.setState({
      userInputAddl: e.target.value
    })
  }
  compObject(e){
    let newItem = {name: this.state.userInputName, title:this.state.userInputTitle, race:this.state.race, charClass:this.state.charClass, 
    opinion:this.state.userInputOpinion, addl:this.state.userInputAddl}
    this.setState({
        userInputCharacter: newItem
    })
    axios.post('/api/character', newItem).then(res => {
      this.setState({
        charArray: res.data
      })
    })
  }


 
  render() {
    return (
      
      <div className="App">
     
      <h1>Background Tracker</h1> 
      <div className= "App-header">
      <div className = "infoBox">
      <div className = "nameTitle">
      Name, Title
      <input type='text' name='name' label='name' onChange={(e) => this.handleName(e)} />
      <input type = 'text' name = 'title' label = 'title' onChange={(e) => this.handleTitle(e)} />
      </div>
     
      Race and Class
      <input type='text' name='race' label='race' onChange={(e) => this.handleRace(e)} />
      <input type = 'text' name = 'class' label = 'class' onChange={(e) => this.handleClass(e)} />
      <div className='nameTitle'>
     Opinion and Additional Info
      <input type='text' name='opinion' label='opinion' onChange={(e) => this.handleOpinion(e)} />
      <input type = 'text' name = 'addl' label = 'addl' onChange={(e) => this.handleAddl(e)} />
      
      </div>
      <button onClick={(e)=> this.compObject(e)}>Save the Character</button>
     <Getter /> 
      </div>
      </div>
      </div>
     
    );
  }
}

export default App;
