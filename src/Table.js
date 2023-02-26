import React, { useState, useEffect } from 'react';
import Row from './Row';
import "./css/styles.css";

function Table() {
    const [data, setData] = useState([
      {
        startTime: 0,
        duration: 0
      }
    ]);

    function handleAddRow() {
      setData([...data, {
        startTime: data[data.length-1].startTime + data[data.length-1].duration +1,
        duration: 0
      }]);

    }

    function handleRowChange(row, index) {
      let newData = [...data];
      newData[Number(index)] = row;
      setData(newData);
    }

    function calculateStartTimes() {
      let newStartTimes = [...data];
      let sum = 0;
      for(let i=0; i<newStartTimes.length; i++){
        if(i === 0){
          newStartTimes[i].startTime = 0;
          sum++;
          sum+=newStartTimes[i].duration;
          continue;
        }
        newStartTimes[i].startTime = sum;
        sum++;
        sum+=newStartTimes[i].duration;
      }
      setData(newStartTimes);
      console.log("start");
      for(let i=0; i<data.length; i++){
        console.log(data[i].startTime);
      }

  }
  // useEffect(() => {
  //   console.log(data)
  //   // calculateStartTimes();
  // }, [[data.some(row => row.duration !== row?.durationPrev)]]);

    return (
        <div>
            <button onClick={handleAddRow}>Add Row</button>
            <div className='row'>
                <label className='col'>Start</label>
                <label className='col'>Duration</label>
                <label className='col'>Part</label>
                <label className='col'>El</label>
                <label className='col'>Base Mark</label>
                <label className='col'>Declared Difficulty</label>
                <label className='col'>Bonus</label>
                <label className='col'>Totals</label>

            </div>

            {Array.from({ length: data.length }, (_, index) => (
                <Row
                    key={"ROW"+index}
                    id={"row"+index}
                    index={index}
                    onRowChange={handleRowChange}
                    row={data[index]}
                    start={data[index].startTime}
                    onDurationChange={calculateStartTimes}
                />
            ))}
            {/* {Object.keys(data).map((key) => (
              <Row
                key={"ROW" + key}
                id={"row" + key}
                index={key}
                onRowChange={handleRowChange}
                row={data[key]}
              />
            ))} */}
        </div>
    );
}

export default Table;