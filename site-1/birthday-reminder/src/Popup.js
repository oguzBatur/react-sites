import React from "react";
import './Popup.css';
import {people} from './people.js';
const Popup = (props) => {

	const peopleInfo = [
		{
			id: '',
			name: '',
			age: '',
			img: '',
			date: '',
		}
	];
	const pushPerson= () => {
		let currentTime = new Date();
		console.log(peopleInfo);
		peopleInfo[0].id = people.length + 1 ;
		peopleInfo[0].age =  currentTime.getFullYear() - peopleInfo[0].date.substring(0,4); 
		peopleInfo[0].img.trimStart();
		peopleInfo[0].img.trimEnd();
		if(peopleInfo[0].img == '' || peopleInfo[0].img == ' '){
			peopleInfo[0].img = `https://robohash.org/${peopleInfo[0].name}`
		}
		people.push(peopleInfo[0]);
		console.log(people);
	}

    return(props.trigger) ? (

        <div className='general-container'>
            
            <div className='pop-container'>
                <h3>
                    Create A New Birthday!
                </h3>
                <h4>
                    Simply provide required information below!
                </h4>
                <input type='text'onChange={(type) => {
			peopleInfo[0].name = type.target.value;
			console.log(peopleInfo[0].name);
			

		}} placeholder='Enter his/her name...'/>
                <input  onChange={(tarih) => {
					peopleInfo[0].date = tarih.target.value;
				}} type='date' placeholder='birthday(example, 21.09.1998)'/>
                <input onChange={(url) =>{
					peopleInfo[0].img = url.target.value;
				}} type='url' placeholder='Image Url...'/>
                <button onClick={pushPerson}>Create!</button>
                <button className='close' onClick={() => props.setTrigger(false)}>Close</button>

            </div>
        </div>
    ) : '';
	
}
export default Popup;
