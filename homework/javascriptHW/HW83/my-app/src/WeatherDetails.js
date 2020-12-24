import React from 'react';

export default function WeatherDetails(props) {
    // 'use strict';
    if (props.foo) {
        const { location, description, picture } = props.foo;
        return (
            <>
                <h2>{location}</h2>
                <img src={picture} alt={location} />
                <h3>{description}</h3>
            </>
        );
    }
    return <h3>Please Enter A Zipcode For The Current Weather</h3>
}