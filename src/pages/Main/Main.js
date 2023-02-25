import React from 'react';
import './Main.scss';
import Feeds from './MainComponents/Feeds/Feeds';
import Header from './MainComponents/Header/Header';

const Main = () => {
  return (
    <div className="main">
      <Header />
      <div className="feeds">
        <Feeds />
        <Feeds />
        <Feeds />
      </div>
    </div>
  );
};

export default Main;
