import React from 'react';
import './OtherUsersMessageStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function OtherUsersMessage() {
    var sampleMessage = {name: "Palesa Gumede", message: "This is my first message"};
    return(
        <div className='OtherUsersMessage'>

                <div className='other-text-wrapper'>
                    <div className='other-text-content'>
                        <p className='con-title'>{sampleMessage.name}</p>
                        <p className='con-lastMessage'>{sampleMessage.message}</p>
                        <p className='con-timeStamp'>12:00am</p>
                    </div>
                </div>
          
        </div>
    );
}

export default OtherUsersMessage;
