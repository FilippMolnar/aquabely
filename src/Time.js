import React, { useState } from 'react';


function Time(props) {
  function startTime(sum) {
    let m = String(Math.floor(sum/60));
    let s = String(sum%60);
    let minutes = m < 10 ? "0"+m : m;
    let seconds = s < 10 ? "0"+s : s;
    return minutes + ":" + seconds;
}

    return (
        <div className='col'>
          <label style={{ fontSize: '15px' }}>
            {startTime(props.valueFrom)}
          </label>
        <input
          id="input"
          type="number"
          value={props.duration}
          data-index={props.index}
          onChange={props.onDurationChange}
          style={{ width: '40px' }}
        />
        </div>
      );
}

export default Time;