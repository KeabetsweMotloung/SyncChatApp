import React from 'react';
import './OtherUsersMessageStyle.css';


function OtherUsersMessage() {
    var sampleMessage = {name: "RandomUser", message: "This is my first message"};
    return(
    <div className='OtherUsersMessage'>
    <div className='conversationContainer'>
    <p className='con-icon'>{sampleMessage.name[0]}</p>
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