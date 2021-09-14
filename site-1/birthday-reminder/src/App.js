import './App.css';
import List from './List';
import Popup from './Popup';
import { useState } from 'react';

function App() {
 	const [buttonPopup, setButtonPopup] = useState(false);
	function birthdayChecker(event){
    console.log(event);
    let currentMonth = new Date().getUTCMonth();
    let currentDay = new Date().getUTCDay();
    if(event.substring(5,7) === currentMonth && event.substring(8,10) === currentDay){
      console.log('Birthday today!');
    }
    else{
      console.log(event.substring(5,7));
      console.log(event.substring(8,10));
      console.log(currentMonth);
      console.log(currentDay);
    }
	} 
  return(
    <div>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}/>
      <div className='container'>
      <div className='RealContainer'>
        <h3  >0 birthdays today</h3>
        <List  birthdayChecker={birthdayChecker}/>
        <div>
          <button className='buttons' onClick={() => setButtonPopup(true)} >Add a Birthday!</button>
          <button className='buttons'>Clear All</button>
         
        </div>
      </div>
    </div>
    
    </div>
      
  )
}


export default App;
