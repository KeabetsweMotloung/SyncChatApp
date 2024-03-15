import React from 'react';
import './SideBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus} from '@fortawesome/free-solid-svg-icons';



function SideBar() {
  return (
    <div className='sideBarView'>

    <div className='groupContainer'>
    <div className='addGroup'>
            <FontAwesomeIcon icon={faUsers} />
          </div>

          <div className='addContact'>
              <FontAwesomeIcon icon={faUserPlus} />
              </div>


           <div className='viewProfile'>
              <FontAwesomeIcon icon={faUser} />
            </div>
            </div>


      <div className="viewSearch">
        <FontAwesomeIcon icon={faSearch} />
        <div className="searchInput">
          <input placeholder="  Search..." />
        </div>
      </div>

      <div className='viewLoadConversations'>
        {/* Container for each person/chat */}
        <div className="personContainer">
          <div className="icon">
            <FontAwesomeIcon icon={faUser} />
          </div>
          Sync Bot
        </div>

        {/* Add more person containers as needed */}
        <div className="personContainer">
          <div className="icon">
            <FontAwesomeIcon icon={faUser} />
          </div>
          Palesa Gumede
        </div>
      </div>

      {/* Container for adding a group */}

    </div>
  );
}

export default SideBar;
