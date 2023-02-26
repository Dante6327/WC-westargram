import React from 'react';
import './SidebarUser.scss';
import userImg from 'assets/images/emptyUser.png';

const SidebarUser = () => {
  let randomStr = Math.random().toString(36).substring(2, 12);

  //useState set함수로 otherUsers를 변경하면 무한 렌더링이 일어나 push로 배열만 채우고 렌더링은 하지 않는다.
  //Header => user검색에서 쓰기 위해 렌덜이이 필요없다.
  //   useEffect(() => setOtherUsers(otherUsers.push(randomStr)), []);

  return (
    <div className="sidebarUser">
      <img src={userImg} alt="userImg" />
      <span className="userName">{randomStr}</span>
    </div>
  );
};

export default SidebarUser;
