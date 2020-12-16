import React from 'react';

export default function RecipeDetails(props) {
    return (
        <>
            <h3>{props.details.name}</h3>
            <h3>{props.details.ingredients}</h3>
            <h3>{props.details.instructions}</h3>
        </>
    );
}