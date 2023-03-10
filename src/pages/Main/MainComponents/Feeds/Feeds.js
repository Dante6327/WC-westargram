import React, { useState } from 'react';
import './Feeds.scss';
import feedImg from '../../../../assets/images/yoon.jpg';
import Reply from './Reply/Reply';

const Feeds = () => {
  const [isActive, setIsActive] = useState(false);
  const [reply, setReply] = useState('');
  const [replyArr, setReplyArr] = useState([]);
  const [openReply, setOpenReply] = useState(false);
  const [replyCount, setReplyCount] = useState(0);

  const handleActive = () => {
    setIsActive(isActive => !isActive);
  };

  const handleKeyDown = e => {
    if (e.key === 'Enter' && reply) {
      setReplyArr([...replyArr, { reply, replyCount }]);
      setReplyCount(replyCount + 1);
      setReply('');
    }
  };

  const handleClick = () => {
    if (reply) {
      setReplyArr([...replyArr, { reply, replyCount }]);
      setReplyCount(replyCount + 1);
      setReply('');
    }
  };

  const handleChange = e => {
    setReply(e.target.value);
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
                className={isActive ? 'btnFillHeartIcon' : 'btnHeartIcon'}
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
                jinp1993?????? ???????????????.
              </span>
            </div>
          )}
          <p className="boxContents">
            <b>yoon_1216</b>&nbsp; ??????
          </p>

          <div className="boxReplyWrapper">
            <div className="boxReplyArea">
              {replyArr.length > 0 && (
                <p className="boxShowMore">
                  <span className="txtReplyCnt">?????? {replyArr.length}???</span>
                  <button
                    className="btnShowMore"
                    onClick={() => setOpenReply(!openReply)}
                  >
                    ...??? ??????
                  </button>
                </p>
              )}

              <div className={`reply ${openReply}`}>
                {replyArr.map(reply => (
                  <Reply
                    reply={reply}
                    key={reply.replyCount}
                    replyArr={replyArr}
                    setReplyArr={setReplyArr}
                  />
                ))}
              </div>
            </div>
            <input
              type="text"
              placeholder="?????? ??????"
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              className="inputReply"
              value={reply}
            />
            <button className="enterReply" onClick={handleClick}>
              ??????
            </button>
          </div>
        </section>
      </div>
    </article>
  );
};

export default Feeds;
