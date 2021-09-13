import React from 'react';
import {people} from './people.js'; 
import './List.css';
import { useState } from 'react';

const List = (props) => {
	const [buttonPopup, setButtonPopup] = useState(false);
	const peopleList = people.map(person => {
		return buttonPopup === false ?(

			<div className='list-container'>
				<div className='photo'>
					<img src={person.img}/>
				</div>	
				<div className='list'>
					<h3 className='name'>{person.name}</h3>
					<h4 className = 'age'>{person.age} Years Old!</h4> 	
					<p className='birth-date'>{person.date} is the Birthday!</p>
				</div>
				<button onClick={() => setButtonPopup(true)} className='delete'>Delete</button>
			</div>
			
		) : ' '	
		

	});
	return (
		<div>
			{peopleList}
		</div>


	)


}
export default List;
