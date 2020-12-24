import React from 'react';
export default function Calculator(props) {
    return (
        <button onClick={props.numberClicked}>{props.numberButtons.name}</button>
    );
}