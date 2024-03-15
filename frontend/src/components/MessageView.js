
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPortrait} from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import './MessageView.css';
import OtherUsersMessage from './OtherUsersMessage';
import UserMessage from './UserMessage';



function MessageView() {
const userName = "John Doe";
  return (
    <div className='messageView'>


      <div className="chatHeader">
      <FontAwesomeIcon icon={faPortrait} className="icon" size="3x"/>
      <div className="userName">{userName}</div>
      <div className="userStatus">Online</div>
      </div>


      <div className="chatContainer">
      <OtherUsersMessage />
      <UserMessage />
      </div>




      <div className="chatInputContainer">
       <input placeholder="Type a Message" className='search-box' />
              <FontAwesomeIcon icon={faPaperPlane} className="send-icon" />
      </div>
    </div>
  );
}

export default MessageView;
