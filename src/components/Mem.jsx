import React from 'react';
import '../styles/Mem.css';

const Mem = ({
  title,
  upvotes,
  downvotes,
  imgUrl,
  onUpvote,
  onDownvote,
  handleSave,
}) => {
  return (
    <li className="mem">
      <div className="mem-wrapper">
        <h3 className="mem-title">{title}</h3>
        <img src={imgUrl} alt={title} className="mem-image" />
      </div>

      <div className="mem-controls">
        <div className="btn-wrapper">
          <button onClick={() => onUpvote(title)} className="mem-btn upvote">
            <svg width="25" height="25">
              <use href="img/sprite.svg#like"></use>
            </svg>
          </button>
          <span> {upvotes}</span>
        </div>
        <div className="btn-wrapper">
          <button
            onClick={() => onDownvote(title)}
            className="mem-btn downvote"
          >
            <svg width="25" height="25">
              <use href="img/sprite.svg#like"></use>
            </svg>
          </button>
          <span>{downvotes}</span>
        </div>
        <div className="btn-wrapper">
          <button onClick={() => handleSave(title)} className="mem-btn">
            <svg width="25" height="25">
              <use href="img/sprite.svg#like"></use>
            </svg>
          </button>
        </div>
      </div>
    </li>
  );
};

export default Mem;
