import React from 'react';
import './MessageView.css';

function MessageView() {
    return(
     <div className='MessageBar'>
            {/* Container for each person/chat */}
            <div className="personContainer">
              <div className="icon">
                <FontAwesomeIcon icon={faUser} />
              </div>
              Sync Bot
            </div>
            {/* Add more person containers as needed */}
          </div>
        </div>



    )

}

export default MessageView;
