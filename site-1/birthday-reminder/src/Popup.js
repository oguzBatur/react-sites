import React from "react";
import './Popup.css';
const Popup = (props) => {

    return(props.trigger) ? (

        <div className='general-container'>
            
            <div className='pop-container'>
                <h3>
                    Create A New Birthday!
                </h3>
                <h4>
                    Simply provide required information below!
                </h4>
                <input type='text' placeholder='First Name'/>
                <input type='text' placeholder='Last Name'/>
                <input type='date'/>
                <input type='url' placeholder='Image Url...'/>
                <button>Create!</button>
                <button className='close' onClick={() => props.setTrigger(false)}>Close</button>

            </div>
        </div>
    ) : '';
}
export default Popup;