import React, { Component } from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box';

class App extends Component {
  state = {
    monsters: [],
    searchField:''
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>{
      this.setState({monsters:users}) 
    })
  }
  handleSearchEvent = (event) => {
    const userInput = event.target.value;
    this.setState({searchField: userInput}, ()=>{})
    console.log(this.state.searchField)
  }
  
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        {/* <input type="search" onChange={this.handleSearchEvent} /> */}
        <h1>Monster Rolodex</h1>
        <SearchBox type="search" handleChange={this.handleSearchEvent} placeholder="Search Monster"/>
        <CardList monsters = {filteredMonsters}/ >
      </div>
    );
  }
  
}

export default App;
