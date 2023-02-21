import React from "react";
import "./Main.scss";
import Header from "./MainComponents/Header";
import MainContents from "./MainComponents/MainContents";

const Main = () => {
  return (
    <div className="Main">
      <Header />
      <MainContents />
    </div>
  );
};

export default Main;
