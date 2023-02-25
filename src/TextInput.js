import React, { useState } from 'react';


function TextInput(props) {
    return (
      <div className='col'>
      <input
          type="text"
          value={props.duration}
          data-index={props.index}
          onChange={props.handleChange}
          style={props.style}
        />
        </div>
      );
}

export default TextInput;