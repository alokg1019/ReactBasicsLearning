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

class App extends Component {

  state = {
    persons : [
      { name: 'Max', age: 28},
      { name: 'Manu', age: 29},
      { name: 'Stephanie', age: 30},
    ]
  }

  switchNameHandler = (newName) => {

    this.setState({ persons: [
      { name: newName, age: 28},
      { name: 'Manu', age: 29},
      { name: 'Stephanie', age: 30},
    ]});
  }

  nameChangedHandler = (event) => {
    
    this.setState({ persons: [
      { name: 'Max', age: 28},
      { name: event.target.value, age: 29},
      { name: 'Stephanie', age: 30},
    ]});
  }

  render(){

    // Inline Styling
    const style = {
      backgroundColor : 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor : 'pointer'
    }

    return (
      <div className="App">
        <h1>Hi, I'm a rect App</h1>
        <button style={ style} onClick={ () => this.switchNameHandler('Alok') }>Switch Name</button>
        <Person
         name={this.state.persons[0].name}
          age={this.state.persons[0].age}> 
        </Person>
        <Person
         name={this.state.persons[1].name}
         age={this.state.persons[1].age}
         click={this.switchNameHandler.bind(this,"Alok!!")}
         changed={this.nameChangedHandler}
         >My Hobies: Racing
        </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}></Person>
      </div>
    )
  }

}


// Using ReactHooks : New Feature since React 16.8 - Allows to update state in function based components
// const App = props => {

//   const [personsStates, setPersonsState ] = useState({
//     persons : [
//       { name: 'Max', age: 28},
//       { name: 'Manu', age: 29},
//       { name: 'Stephanie', age: 30},
//     ]
//   });

//   const switchNameHandler = () => {
//     console.log("Was Clicked!");  
//     setPersonsState({ persons: [
//       { name: 'Alok', age: 28},
//       { name: 'Manu', age: 29},
//       { name: 'Stephanie', age: 30},
//     ]});
//   }

//   return (
//     <div className="App">
//       <h1>Hi, I'm a rect App</h1>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person name={personsStates.persons[0].name} age={personsStates.persons[0].age}></Person>
//       <Person name={personsStates.persons[1].name} age={personsStates.persons[1].age}>My Hobiies: Racing</Person>
//       <Person name={personsStates.persons[2].name} age={personsStates.persons[2].age}></Person>
//     </div>
//   )

// }

export default App;
