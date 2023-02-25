import React from 'react';
import './Reply.scss';

const Reply = props => {
  const { openReply, replyArr } = props;

  return (
    <div className={`reply ${openReply}`}>
      {replyArr.map((reply, index) => (
        <p key={index}>
          <b>jinp1993</b>&nbsp;&nbsp;&nbsp;
          {reply}
        </p>
      ))}
    </div>
  );
};

export default Reply;
