import React, { useState } from 'react';
import Row from './Row';
import "./css/styles.css";

function Table() {
    const [count, setCount] = useState(1);
    let [durations, setDurations] = useState([0]);
    let [parts, setParts] = useState([""]);

    function handleAddRow() {
      setCount(count + 1);
      setDurations((prev)=>{
        let n = [...prev, 0];
        return n;
      })
      setParts((prev)=>{
        let n = [...prev, ""];
        return n;
      })
    }

    function handleDurationChange(event) {
        let duration = Number(event.target.value);
        let idx = event.target.dataset.index;
        let newD = [...durations];
        newD[idx] = duration;
        setDurations(newD);
    }

    function handlePartChange(event) {
        let idx = event.target.dataset.index;
        let n = [...parts];
        n[idx] = event.target.value;
        setParts(n);
    }

    function calculateStartTime(index) {
        if(index === 0) return "00:00";
        let sum = 0;
        for(let i=0; i<index; i++){
            sum+=durations[i];
        }
        // next row starts with +1 so for every row I add one
        sum+=index;
        let m = String(Math.floor(sum/60));
        let s = String(sum%60);
        let minutes = m < 10 ? "0"+m : m;
        let seconds = s < 10 ? "0"+s : s;
        return minutes + ":" + seconds;
    }

    function calculateTotal(){
        //TODO
        return 0;
    }

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
            {Array.from({ length: count }, (_, index) => (
                <Row
                    key={"ROW"+index}
                    id={"row"+index}
                    index={index}
                    onDurationChange={handleDurationChange}
                    onPartChange={handlePartChange}
                    duration={durations[index]}
                    startTime={calculateStartTime(index)}
                    total={calculateTotal()}
                />
            ))}
        </div>
    );
}

export default Table;