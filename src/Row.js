import React, { useState } from 'react';
import Difficulty from './Difficulty';
import Time from './Time';


function Row(props) {
    const [stringValueDuration, setStringValueDuration] = useState('');
  
    function handleTimeChangeDuration(event) {
        setStringValueDuration(event.target.value);
    }
	console.log(props.previousTime);

    return (
    <div>
      <Time
        key={props.id+"time"}
        valueFrom={props.previousTime}
        valueDuration={stringValueDuration}
        onChange={handleTimeChangeDuration}
      />
      <Difficulty
        key={props.id+"diff"}
        id={props.id+"diff"}

      />
    </div>
      );
}

export default Row;