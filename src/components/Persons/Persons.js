import React, { Component } from 'react';
import Person from './Person/Person';

//Alternate syntax - If the function is simply returning
class Persons extends Component {
// const persons = (props) => 


      // static getDerivedStateFromProps(props, state){
      //       console.log("Persons.js getDerivedStateFromProps");
      //       return state;
      // }

      shouldComponentUpdate(nextProps, nextState){

            console.log("Person.js shouldComponentUpdate");
            if(nextProps.persons !== this.props.persons){
                  return true;
            }
            else{
                  return false;
            }
      }

      getSnapshotBeforeUpdate(prevProps, prevState){
            console.log("Person.js getSnapshotBeforeUpdate");
            return null;
      }

      componentDidUpdate(){
            console.log("Person.js component did update");
      }

      componentDidMount(){
            console.log("Person.js component did mount");
      }

      render(){
            
            console.log("Person.js render");
            return this.props.persons.map((person, index) => {
                  return (
                        <Person
                        key={person.id}
                        name={person.name}
                        age={person.age}
                        click={ () => this.props.clicked(index)}
                        changed={(event) => this.props.changed(event, person.id)}
                        />
                  );
            });
      }
}

export default Persons;