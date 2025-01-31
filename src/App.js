import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { memes as initialMemes } from './data/data';
import MemList from './components/MemList';
import NavBar from './components/NavBar';
import Error from './components/Error';
import HomePage from './components/HomePage';

const App = () => {
  const [memes, setMemes] = useState(initialMemes);
  const [votedMemes, setVotedMemes] = useState(new Map());

  const handleUpvote = (_id) => {
    setMemes((prevMemes) =>
      prevMemes.map((mem) => {
        if (mem._id !== _id) return mem;

        let newUpvotes = mem.upvotes;
        let newDownvotes = mem.downvotes;
        let currentVote = votedMemes.get(_id);

        if (currentVote === 'upvote') {
          return mem;
        } else {
          if (currentVote === 'downvote') {
            newDownvotes -= 1;
          }
          newUpvotes += 1;
          setVotedMemes((prev) => new Map(prev).set(_id, 'upvote'));
        }

        return { ...mem, upvotes: newUpvotes, downvotes: newDownvotes };
      })
    );
  };

  const handleDownvote = (_id) => {
    setMemes((prevMemes) =>
      prevMemes.map((mem) => {
        if (mem._id !== _id) return mem;

        let newUpvotes = mem.upvotes;
        let newDownvotes = mem.downvotes;
        let currentVote = votedMemes.get(_id);

        if (currentVote === 'downvote') {
          return mem;
        } else {
          if (currentVote === 'upvote') {
            newUpvotes -= 1;
          }
          newDownvotes += 1;
          setVotedMemes((prev) => new Map(prev).set(_id, 'downvote'));
        }

        return { ...mem, upvotes: newUpvotes, downvotes: newDownvotes };
      })
    );
  };

  const handleSave = (_id) => {
    setMemes((prevMemes) =>
      prevMemes.map((mem) =>
        mem._id === _id ? { ...mem, isSaved: !mem.isSaved } : mem
      )
    );
  };

  const hotMemes = memes.filter((mem) => mem.upvotes - mem.downvotes > 5);
  const regularMemes = memes.filter((mem) => mem.upvotes - mem.downvotes <= 5);
  const savedMemes = memes.filter((mem) => mem.isSaved);

  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<HomePage />} />
        <Route
          path="hot"
          element={
            <MemList
              memes={hotMemes}
              onUpvote={handleUpvote}
              onDownvote={handleDownvote}
              handleSave={handleSave}
            />
          }
        />
        <Route
          path="regular"
          element={
            <MemList
              memes={regularMemes}
              onUpvote={handleUpvote}
              onDownvote={handleDownvote}
              handleSave={handleSave}
            />
          }
        />
        <Route
          path="saved"
          element={
            <MemList
              memes={savedMemes}
              onUpvote={handleUpvote}
              onDownvote={handleDownvote}
              handleSave={handleSave}
            />
          }
        />
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default App;
