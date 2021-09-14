import React from 'react';
import {people} from './people.js'; 
import './List.css';
import { useState } from 'react';

const List = ({birthdayChecker}) => {
	const [buttonPopup, setButtonPopup] = useState(false);
	const olayDinleyici = (olay) => {
		olay.target.parentNode.parentNode.removeChild(olay.target.parentNode);

	}
	const peopleList = people.map(person => {
		const filterPeople = birthdayChecker(person.date)
		return (
			
			<div className='list-container'>
				<div className='photo'>
					<img alt={person.name} src={person.img}/>
				</div>
				<div className='list'>
					<h3 className='name'>{person.name}</h3>
					<h4 className = 'age'>{person.age} Years Old!</h4>
					<p className='birth-date'>{person.date} is the Birthday!</p>
				</div>
				<button onClick={olayDinleyici} className='delete'>Delete</button>
			</div>
			
		) 
		
	});

	



	return (
		<div>
			{peopleList}

		</div>


	)


}
export default List;
