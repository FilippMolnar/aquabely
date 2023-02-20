import React from 'react';

import elements from './json/elements.json'

export const calculatePoints = (el) => {
    if(elements.hasOwnProperty(el)){
        return elements[el];
    } else {
        throw new Error("No such element exists.");
    }
}