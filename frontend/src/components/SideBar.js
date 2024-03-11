import React from 'react';
import './SideBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons';

function SideBar() {
  return (
    <div className='sideBarView'>
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
          Palesa Gumede
        </div>
        {/* Add more person containers as needed */}
      </div>
    </div>
  );
}

export default SideBar;
