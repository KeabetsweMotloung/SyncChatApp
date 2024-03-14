// MainContainer.js
import React from 'react';
import NavigationBar from './components/NavigationBar';
import SideBar from './components/SideBar';
import MessageView from './components/MessageView';



function MainContainer() {
  return (
    <div>
      <NavigationBar />
      <MessageView />
      <SideBar />


    </div>
  );
}

export default MainContainer;
