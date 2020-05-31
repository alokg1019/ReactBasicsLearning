import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Radium, {StyleRoot} from 'radium';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

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
      { id: 1, name: 'Max', age: 28},
      { id: 2, name: 'Manu', age: 29},
      { id: 3, name: 'Stephanie', age: 30},
    ],
    showPersons: false
  }

  // switchNameHandler = (newName) => {

  //   this.setState({ persons: [
  //     { name: newName, age: 28},
  //     { name: 'Manu', age: 29},
  //     { name: 'Stephanie', age: 30},
  //   ]});
  // }
  deletePersonHandler = (personIndex) => {

    //Always update state by first creating a copy. Do not mutate the original state object directly
    const persons = this.state.persons.slice(); // OR [..this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({persons: persons});

  }

  nameChangedHandler = (event, id) => {
    
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons});
  }

  tooglePersonsHandler = () => {

    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render(){

    // Inline Styling
    const style = {
      backgroundColor : 'green',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor : 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      },
      color: 'white'
    }

    let persons = null;

    if(this.state.showPersons)
    {
      persons = (
          <div>
            {
              this.state.persons.map( (person, index) => {
                return (<ErrorBoundary>
                          <Person
                          key={person.id}
                          name={person.name}
                          age={person.age}
                          click={ () => this.deletePersonHandler(index)}
                        changed={(event) => this.nameChangedHandler(event, person.id)}/>
                 </ErrorBoundary>)
              })
            }
            {/* <Person
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
            <Person name={this.state.persons[2].name} age={this.state.persons[2].age}></Person> */}
        </div>
      );


      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      };

    }


    return (
      <StyleRoot>
        <div className="App">
          <h1>Hi, I'm a rect App</h1>
          {/* <button 
          style={ style} 
          onClick={ () => this.switchNameHandler('Alok') }>
            Switch Name
            </button> */}
          <button 
          style={ style} 
          onClick={ this.tooglePersonsHandler}>
            Toogle Person
            </button>
            {
              this.state.showPersons === true ?  persons: null
            }

        </div>
      </StyleRoot>
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

export default Radium(App);
