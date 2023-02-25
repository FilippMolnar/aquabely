import React, { useState } from 'react';
import Difficulty from './Difficulty';
import Time from './Time';
import TextInput from './TextInput';
import "./css/styles.css";

function Row(props) {

    return (
    <div className='row'>
      <Time
        key={props.id+"time"}
        valueFrom={props.startTime}
        duration={props.duration}
        index={props.index}
        onDurationChange={props.onDurationChange}
      />
      <TextInput
        key={props.id+"part"}
        index={props.index}
        handleChange={props.onPartChange}
        style={{width: '70px'}}
      />
    
      <TextInput
        key={props.id+"el"}
        index={props.index}
        handleChange={props.onPartChange}
        style={{width: '20px'}}
      />

      <Difficulty
        key={props.id+"base"}
        id={props.id+"base"}
        maxElements={2}
      />

      <Difficulty
        key={props.id+"diff"}
        id={props.id+"diff"}
        maxElements={10}
      />

      <Difficulty
        key={props.id+"bonus"}
        id={props.id+"bonus"}
        maxElements={5}
      />

      <span className='col'>{props.total}</span>
    </div>
      );
}

export default Row;