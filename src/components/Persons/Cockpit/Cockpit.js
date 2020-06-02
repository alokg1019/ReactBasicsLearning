import React, { useEffect } from 'react';


const cockpit = (props) => {

    //Runs for every render cycle
    // useEffect(()=> {
    //     console.log("[Cockpit.js] useEffect");
    // });

    return (
        <div>
            <h1>{ props.title}</h1>
            <button 
            style={ props.style} 
            onClick={ props.toggle}>
            Toogle Person
            </button>
          </div>
    );

};

export default cockpit;