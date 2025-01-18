import React from 'react';
import Mem from './Mem';
import '../styles/MemList.css';
import Disclaimer from './Disclaimer';

const MemList = ({ memes, onUpvote, onDownvote, handleSave }) => {
  return memes.length > 0 ? (
    <ul className="mem-list">
      {memes.map((mem) => (
        <Mem
          key={mem._id}
          _id={mem._id}
          title={mem.title}
          upvotes={mem.upvotes}
          downvotes={mem.downvotes}
          imgUrl={mem.imgUrl}
          isSaved={mem.isSaved}
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
