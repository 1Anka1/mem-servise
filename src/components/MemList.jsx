import React from 'react';
import Mem from './Mem';
import '../styles/MemList.css';

const MemList = ({ memes, onUpvote, onDownvote }) => {
  return (
    <div className="mem-list">
      {memes.map((mem) => (
        <Mem
          key={mem.title}
          title={mem.title}
          upvotes={mem.upvotes}
          downvotes={mem.downvotes}
          imgUrl={mem.imgUrl}
          isStarred={mem.isStarred}
          onUpvote={() => onUpvote(mem.title)}
          onDownvote={() => onDownvote(mem.title)}
        />
      ))}
    </div>
  );
};

export default MemList;
