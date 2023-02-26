import React, { useState } from 'react';


function TextInput(props) {
	const [text, setText] = useState("");

  function handleChange(event){
    setText(event.target.value)
    props.handleTextChange(event.target.value, props.type);
  }

  return (
      <div className='col'>
      <input
          type="text"
          value={text}
          data-index={props.index}
          onChange={handleChange}
          style={props.style}
        />
        </div>
      );
}

export default TextInput;