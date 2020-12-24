import React from 'react';
export default function Calculator(props) {
    return (
        <button onClick={props.operatorClicked}>{props.operatorButtons.name}</button>
    );
}