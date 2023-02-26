import React from 'react';
import './Sidebar.scss';
import SidebarUser from './SidebarUser/SidebarUser';

const Sidebar = props => {
  const { type, data } = props;

  return (
    <div className="sidebar">
      <div className="top">
        <span className="title">
          {type === 'story' ? '스토리' : '회원님을 위한 추천'}
        </span>
        <span className="viewAll">모두 보기</span>
      </div>
      <div className="main">
        {data.map((userName, index) => (
          <SidebarUser key={index} userName={userName} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
