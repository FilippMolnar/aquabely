import React, { useState } from 'react';

function Element(props) {
    return (
        <div>
            <span>{props.element}</span>
            <span>{props.points}</span>

        </div>
      );
}

export default Element;


