import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { memes as initialMemes } from './data/data';
import MemList from './components/MemList';
import NavBar from './components/NavBar';
import Error from './components/Error';
import HomePage from './components/HomePage';

const App = () => {
  const [memes, setMemes] = useState(initialMemes);

  const handleUpvote = (_id) => {
    setMemes((prevMemes) =>
      prevMemes.map((mem) =>
        mem._id === _id ? { ...mem, upvotes: mem.upvotes + 1 } : mem
      )
    );
  };

  const handleDownvote = (_id) => {
    setMemes((prevMemes) =>
      prevMemes.map((mem) =>
        mem._id === _id ? { ...mem, downvotes: mem.downvotes + 1 } : mem
      )
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
