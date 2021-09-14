import './App.css';
import List from './List';
import Popup from './Popup';
import { useState } from 'react';

function App() {
 	const [buttonPopup, setButtonPopup] = useState(false);
	let birthdayCounter = 0;
  function birthdayChecker(event){
    console.log(event);
    let currentMonth = new Date().getMonth() + 1;
    let currentDay = new Date().getDate();
    if(event.substring(5,7) == currentMonth && event.substring(8,10) == currentDay){
      birthdayCounter++;
      console.log(birthdayCounter);
      
    }
    else{
      console.log('There seems to be no birthday today...')
    }
	} 
  const clearAll = clear => {
      let elements = document.getElementsByClassName('')
  }
  return(
    <div>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}/>
      <div className='container'>
      <div className='RealContainer'>
        <h3>{birthdayCounter} birthdays today</h3>
        <List  birthdayChecker={birthdayChecker}/>
        <button className='buttons' onClick={() => setButtonPopup(true)} >Add a Birthday!</button>
      </div>
    </div>
    
    </div>
      
  )
}


export default App;
