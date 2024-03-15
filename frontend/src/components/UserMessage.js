import React from 'react';
import './UserMessageStyle.css';


function UserMessage() {

    var sampleMessage = {name: "You", message: "Hey, This is my first message too."};

    return(
    <div className='UserTextContainer'>
        <div className="userMessage">
            <p>{sampleMessage.message}</p>
            <p className="own-timestamp">12:02am</p>
    </div>
    </div>
    );
}

export default UserMessage;