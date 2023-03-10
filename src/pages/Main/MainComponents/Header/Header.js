import React from 'react';
import './Header.scss';

const Header = props => {
  const { userList } = props;

  const handleSearch = e => {};
  return (
    <header className="header">
      <div className="boxContainer">
        <section className="boxHome">
          <button className="btnHome" alt="logo" />
          <span className="txtHome">Westagram</span>
        </section>
        <section className="boxSearch">
          <input
            type="text"
            className="inputSearch"
            onChange={handleSearch}
            placeholder="검색"
          />
        </section>
        <section className="boxNavigation">
          <button className="btnCompass" />
          <button className="btnHeart" />
          <button className="btnAccount" />
        </section>
      </div>
    </header>
  );
};

export default Header;
