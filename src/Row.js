import React, { useState, useEffect } from 'react';
import Difficulty from './Difficulty';
import Time from './Time';
import TextInput from './TextInput';
import "./css/styles.css";

function Row(props) {
  const [row, setRow] = useState({
    ...props.row,
    points: {
      base: [0],
      diff: [0],
      bonus: [0]
    }
  });

  function handleDurationChange(event) {
    setRow({
      ...row,
      duration: Number(event.target.value)
    });
  }

  function handleTextChange(text, type) {
    setRow({
      ...row,
      [type]: text
    })
  }

  function handleElementsChange(el, p, type) {
    setRow({
      ...row,
      elements: {
        ...row.elements,
        [type]: el
      },
      points: {
        ...row.points,
        [type]: p
      },
    })
  }

  useEffect(() => {
    let sumPoints = row.points['base'].reduce(function(a, b){
      return a + b;
    });
    sumPoints += row.points['diff'].reduce(function(a, b){
      return a + b;
    });
    sumPoints += row.points['bonus'].reduce(function(a, b){
      return a + b;
    });
    sumPoints = Math.round(sumPoints*100)/100;
    setRow({
      ...row,
      total: sumPoints
    })
  }, [row.points]);

  useEffect(() => {
    console.log('row change'+row.duration);
    props.onRowChange(row, props.index);
  }, [row]);

    return (
    <div className='row'>
      <Time
        key={props.id+"time"}
        valueFrom={props.start}
        // valueFrom={props.row.startTime}
        duration={row.duration}
        index={props.index}
        onDurationChange={handleDurationChange}
      />
      <TextInput
        key={props.id+"part"}
        index={props.index}
        type={"part"}
        handleTextChange={handleTextChange}
        style={{width: '70px'}}
      />
    
      <TextInput
        key={props.id+"el"}
        index={props.index}
        type={"el_num"}
        handleTextChange={handleTextChange}
        style={{width: '20px'}}
      />

      <Difficulty
        key={props.id+"base"}
        id={props.id+"base"}
        type={"base"}
        maxElements={2}
        handleElementsChange={handleElementsChange}
      />

      <Difficulty
        key={props.id+"diff"}
        id={props.id+"diff"}
        type={"diff"}
        maxElements={10}
        handleElementsChange={handleElementsChange}
      />

      <Difficulty
        key={props.id+"bonus"}
        id={props.id+"bonus"}
        type={"bonus"}
        maxElements={5}
        handleElementsChange={handleElementsChange}
      />

      <span className='col'>{row.total}</span>
    </div>
      );
}

export default Row;