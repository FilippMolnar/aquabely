import React, { useState } from 'react';
import Row from './Row';

function Table() {
    const [count, setCount] = useState(1);

    function handleButtonClick() {
      setCount(count + 1);
    }

    return (
        <div>
            <button onClick={handleButtonClick}>Add Row</button>
            {Array.from({ length: count }, (_, index) => (
                <Row
                    key={"ROW"+index}
                    id={"row"+index}
                    previousTime={index === 0 ? "00:00" : "00:xx"}
                />
            ))}
        </div>
    );
}

export default Table;