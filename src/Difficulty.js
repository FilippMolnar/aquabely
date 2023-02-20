import React, { useState } from 'react';
import Element from './Element';
import {calculatePoints} from "./ElementPoints"

function Difficulty(props) {
	const [elements, setElements] = useState([]);
	const [points, setPoints] = useState([]);

  const [currentInput, setCurrentInput] = useState('');

  const handleInput = (event) => {
    setCurrentInput(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 32 && currentInput.trim() !== '') {
      const nextElementNumber = elements.length + 1;
			try{
				const p = calculatePoints(currentInput.trim());
				const newElement = currentInput.trim();
				setElements([...elements, newElement]);
				setPoints([...points, p]);
				setCurrentInput('');
			} catch(e) {
				//TODO better exception handling
				
				console.log(e);
			}
			
    }
  };
    return (
			<div>
				<input type="text" value={currentInput} onChange={handleInput} onKeyDown={handleKeyDown} />
				{elements.map((element, index) => (
					<Element
						key={index}
						points={points[index]}
						element={element}
					/>
					
				))}
    	</div>

      );
}

export default Difficulty;