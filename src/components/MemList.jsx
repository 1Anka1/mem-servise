import React from 'react';
import Mem from './Mem';
import '../styles/MemList.css';
import Disclaimer from './Disclaimer';

const MemList = ({ memes, onUpvote, onDownvote, handleSave }) => {
  return memes.length > 0 ? (
    <ul className="mem-list">
      {memes.map((mem) => (
        <Mem
          key={mem.title}
          title={mem.title}
          upvotes={mem.upvotes}
          downvotes={mem.downvotes}
          imgUrl={mem.imgUrl}
          isStarred={mem.isStarred}
          onUpvote={onUpvote}
          onDownvote={onDownvote}
          handleSave={handleSave}
        />
      ))}
    </ul>
  ) : (
    <Disclaimer />
  );
};

export default MemList;
