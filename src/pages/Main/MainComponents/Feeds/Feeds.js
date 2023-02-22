import React, { useState } from "react";
import "./Feeds.scss";
import feedImg from "assets/images/yoon.jpg";

const Feeds = () => {
  const [isActive, setIsActive] = useState(false);

  const handleActive = () => {
    setIsActive((isActive) => !isActive);
  };
  return (
    <article className="feeds">
      <div className="boxFeedContainer">
        <section className="boxTop">
          <div className="boxTitleWrapper">
            <button className="btnTitleUserIcon" />
            <span className="txtTitleUserNickName">jinp1993</span>
          </div>
          <div className="boxTitleMoreWrapper">
            <button className="btnTitleMoreIcon" />
          </div>
        </section>
        <section className="boxMain">
          <img className="imgFeed" src={feedImg} alt="feedMainImg" />
          <div className="boxMainIconWrapper">
            <div className="boxPostsRelatedIcons">
              <button
                className={isActive ? "btnFillHeartIcon" : "btnHeartIcon"}
                onClick={handleActive}
              />
              <button className="btnChatIcon" />
              <button className="btnShareIcon" />
            </div>
            <div className="boxBookmark">
              <button className="btnBookmarkIcon" />
            </div>
          </div>
        </section>
        <section className="boxReply">
          {isActive && (
            <div className="boxHowManyGood">
              <button className="btnMainUserIcon" />
              <span className="txtMainUserNickName">
                jinp1993님이 좋아합니다.
              </span>
            </div>
          )}
          <p className="boxContents">
            <b>yoon_1216</b>&nbsp; 이얍
          </p>

          <div className="boxReplyWrapper">
            <input type="text" placeholder="댓글 작성" className="inputReply" />
            <button className="enterReply">게시</button>
          </div>
        </section>
      </div>
    </article>
  );
};

export default Feeds;
