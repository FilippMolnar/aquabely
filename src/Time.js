import React from 'react';


function Time(props) {
    return (
        <div>
          <label style={{ fontSize: '15px' }}>
			{props.valueFrom}
		  </label>
		  <input
            type="text"
            // id={props.id}
            // name={props.duration}
            value={props.valueDuration}
            onChange={props.onChange}
			style={{ width: '40px' }}
          />
        </div>
      );
}

export default Time;