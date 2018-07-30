import React from 'react';

const Button = (props) => {

    return (
        <button onClick={props.change}>Button #{props.number} - Value - ( {props.value} )</button>
    );
 }

 export default Button