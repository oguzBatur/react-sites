import './App.css';
import List from './List';
import Data from './people';
import Popup from './Popup';
import { useState } from 'react';


function App() {
  const [buttonPopup, setButtonPopup] = useState(false);
  
  return(
    <div>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}/>
      <div className='container'>
      <div className='RealContainer'>
        <h3  >0 birthdays today</h3>
        <List/>
    
        <div>
          <button onClick={() => setButtonPopup(true)} >Add a Birthday!</button>
          <button>Clear All</button>
         
        </div>
      </div>
    </div>
    
    </div>
      
  )
}


export default App;
