
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPortrait} from '@fortawesome/free-solid-svg-icons';
import './MessageView.css';

function MessageView() {
const userName = "John Doe";
  return (
    <div className='messageView'>


      <div className="chatHeader">
      <FontAwesomeIcon icon={faPortrait} className="icon" size="3x"/>
      <div className="userName">{userName}</div>
      <div className="userStatus">Online</div>
      </div>


      <div className="chatContainer">Chat Container</div>
      <div className="chatInputContainer">Chat Input</div>
    </div>
  );
}

export default MessageView;
