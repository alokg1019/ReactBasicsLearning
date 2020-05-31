import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

//Using react Hook
import {UseState} from 'react';
// function App() {
//   return (
//     <div className="App">
//       <h1>Hi, I'm a react app</h1>
//     </div>
//   );
// }

/** 
 * 
 * Using Class Component
 * 
 **/ 
/*
class App extends Component {

  state = {
    persons : [
      { name: 'Max', age: 28},
      { name: 'Manu', age: 29},
      { name: 'Stephanie', age: 30},
    ]
  }

  switchNameHandler = () => {
    console.log("Was Clicked!");
    this.state.persons[0].name = "Alok";

    this.setState({ persons: [
      { name: 'Alok', age: 28},
      { name: 'Manu', age: 29},
      { name: 'Stephanie', age: 30},
    ]});
  }

  render(){

    return (
      <div className="App">
        <h1>Hi, I'm a rect App</h1>
        <button onClick={ this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobiies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}></Person>
      </div>
    )
  }
}
*/

// Using ReactHooks : New Feature since React 16.8 - Allows to update state in function based components
const App = props => {

  const [personsStates, setPersonsState ] = useState({
    persons : [
      { name: 'Max', age: 28},
      { name: 'Manu', age: 29},
      { name: 'Stephanie', age: 30},
    ]
  });

  const switchNameHandler = () => {
    console.log("Was Clicked!");  
    setPersonsState({ persons: [
      { name: 'Alok', age: 28},
      { name: 'Manu', age: 29},
      { name: 'Stephanie', age: 30},
    ]});
  }

  return (
    <div className="App">
      <h1>Hi, I'm a rect App</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsStates.persons[0].name} age={personsStates.persons[0].age}></Person>
      <Person name={personsStates.persons[1].name} age={personsStates.persons[1].age}>My Hobiies: Racing</Person>
      <Person name={personsStates.persons[2].name} age={personsStates.persons[2].age}></Person>
    </div>
  )

}

export default App;
