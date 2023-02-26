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
			if(elements.length >= props.maxElements){
				console.log("max number of elements reached");
				setCurrentInput('');
				return;
			}
			
			try{
				const p = calculatePoints(currentInput.trim());
				const newElements = [...elements, currentInput.trim()];
				const newPoints = [...points, Number(p)];
				
				setElements(newElements);
				setPoints(newPoints);
				setCurrentInput('');
				props.handleElementsChange(newElements, newPoints, props.type);
			} catch(e) {
				//TODO better exception handling
				console.log(e);
			}
			
    }
  };
    return (
			<div className='col'>
				<input
					type="text"
					value={currentInput}
					onChange={handleInput}
					onKeyDown={handleKeyDown}
					style={{ width: '80px' }}
				/>
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