import React from 'react';

const cockpit = (props) => {

    return (
        <div>
            <h1>Hi, I'm a rect App</h1>
            <button 
            style={ props.style} 
            onClick={ props.toggle}>
            Toogle Person
            </button>
          </div>
    );

};

export default cockpit;