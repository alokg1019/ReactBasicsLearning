
import React from 'react';
import Person from './Person/Person';

//Alternate syntax - If the function is simply returning
const persons = (props) => props.persons.map( (person, index) => {
        return (
                  <Person
                  key={person.id}
                  name={person.name}
                  age={person.age}
                  click={ () => props.clicked(index)}
                  changed={(event) => props.changed(event, person.id)}/>
         )
      });

export default persons;