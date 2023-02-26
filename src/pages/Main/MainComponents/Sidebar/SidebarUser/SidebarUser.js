import React from 'react';
import './SidebarUser.scss';
import userImg from 'assets/images/emptyUser.png';

const SidebarUser = props => {
  const { userName } = props;

  return (
    <div className="sidebarUser">
      <img src={userImg} alt="userImg" />
      <span className="userName">{userName}</span>
    </div>
  );
};

export default SidebarUser;
