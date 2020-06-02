import React, { Component} from 'react';
import Radium from 'radium';
import Aux from './../../../hoc/Aux';
import './Person.css';

const style = {
    '@media (min-width: 500px)' : {
        width: '450px'
    }
}

class Person extends Component { 
// const person = (props) => {
render(){


        // Or can also use Fragment - in built react component
        return (
            <Aux>
                <div className="Person" style={this.style}>
                    <p onClick={this.props.click}>I'm a { this.props.name} and I am { this.props.age} years old</p>
                    <p>{ this.props.children }</p>
                    <input type="text" onChange={this.props.changed} value={this.props.name} />
                </div>
            </Aux>
        )
    }
}

export default Radium(Person);