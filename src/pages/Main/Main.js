import React from 'react';
import './Main.scss';
import Feeds from './MainComponents/Feeds/Feeds';
import Header from './MainComponents/Header/Header';
import Sidebar from './MainComponents/Sidebar/Sidebar';

const Main = () => {
  return (
    <div className="main">
      <Header />
      <div className="feeds">
        <Feeds />
        <Feeds />
        <Feeds />
      </div>
      <div className="story">
        <Sidebar type="story" />
      </div>
      <div className="recommend">
        <Sidebar type="recommend" />
      </div>
    </div>
  );
};

export default Main;
