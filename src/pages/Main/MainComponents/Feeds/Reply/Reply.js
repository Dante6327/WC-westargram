import React, { useState } from 'react';
import './Reply.scss';
import emptyHeart from 'assets/images/emptyHeart.png';
import fillHeart from 'assets/images/fillHeart.png';
import deleteIcon from 'assets/images/delete.png';

const Reply = props => {
  const [isClickedGood, setIsClickedGood] = useState(false);
  //reply => reply : "text", reply : cnt 의 형태로 전달 받음
  const { reply, replyArr, setReplyArr } = props;

  const handleHeart = () => {
    setIsClickedGood(!isClickedGood);
  };

  const handleDelete = index => {
    setReplyArr(replyArr.filter(item => item.replyCount !== index));
  };
  return (
    <p>
      <span className="txtReplyId">
        <b>jinp1993</b>&nbsp;
      </span>
      {reply.reply}
      <span className="btnGoodAndDelete">
        <img
          src={isClickedGood ? fillHeart : emptyHeart}
          alt="good"
          onClick={handleHeart}
        />

        <img
          src={deleteIcon}
          alt="delete"
          onClick={() => handleDelete(reply.replyCount)}
        />
      </span>
    </p>
  );
};

export default Reply;
