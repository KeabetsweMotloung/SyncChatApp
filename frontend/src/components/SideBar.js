import React from 'react';
import './SideBar.css';

function SideBar() {

    return (
        <div className='sideBarView'>
            <div className='viewHeader'>Header</div>
            <div className='viewSearch'>Search</div>
            <div className='viewLoadConversations'>Chats</div>
        </div>
    );


}
export default SideBar;