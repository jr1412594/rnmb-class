import React, { Component } from 'react'
import './App.css';

import CharacterContainer from './components/CharacterContainer';
import SearchBar from './components/SearchBar';

const baseUrl = 'https://rickandmortyapi.com/api/character'

export default class App extends Component {

  state = {
    characters: [],
    search: '',
    dropDown: 'Select'
  }

  componentDidMount(){
    fetch(baseUrl)
    .then(response => response.json())
    .then(result => this.setState({ characters: result.results }))
  }

  filteredCharacters = () => {
    console.log('log in my filtered: ',this.state.characters)
    return this.state.characters.filter(character => {
      console.log('this is character: ', character)
      if(!this.state.search) {
        return true
      } else {
        return character.name.toLowerCase().includes(this.state.search.toLowerCase())
      }
    }).filter(character => {
      if(this.state.dropDown === 'Select') {
        return true
      } else {
        return character.origin.name.includes(this.state.dropDown)
      }
    })
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }



  render(){

      return (
        <div className="App">
        <h1>Hello!</h1>
        <SearchBar handleChange={ this.handleChange } characters={ this.state.characters }/>
        {/* <CharacterContainer characters={ this.state.characters }/> */}
        <CharacterContainer characters={ this.filteredCharacters() }/>
      </div>
    );
  }

}

// export default App;
