import React, { useState } from 'react';


function Time(props) {
    return (
        <div className='col'>
          <label style={{ fontSize: '15px' }}>
            {props.valueFrom}
          </label>
        <input
          id="input"
          type="text"
          value={props.duration}
          data-index={props.index}
          onChange={props.onDurationChange}
          style={{ width: '40px' }}
        />
        </div>
      );
}

export default Time;