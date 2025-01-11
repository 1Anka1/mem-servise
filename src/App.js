import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import { memes as initialMemes } from './data/data';
import MemList from './components/MemList';
import NavBar from './components/NavBar';

const App = () => {
  const [memes, setMemes] = useState(initialMemes);

  const handleUpvote = (title) => {
    setMemes((prevMemes) =>
      prevMemes.map((mem) =>
        mem.title === title ? { ...mem, upvotes: mem.upvotes + 1 } : mem
      )
    );
  };

  const handleDownvote = (title) => {
    setMemes((prevMemes) =>
      prevMemes.map((mem) =>
        mem.title === title ? { ...mem, downvotes: mem.downvotes + 1 } : mem
      )
    );
  };

  const hotMemes = memes.filter((mem) => mem.upvotes - mem.downvotes > 5);
  const regularMemes = memes.filter((mem) => mem.upvotes - mem.downvotes <= 5);

  return (
    <Router>
      <div className="app">
        <NavBar />
        <Routes>
          <Route
            path="/hot"
            element={
              <MemList
                memes={hotMemes}
                onUpvote={handleUpvote}
                onDownvote={handleDownvote}
              />
            }
          />
          <Route
            path="/regular"
            element={
              <MemList
                memes={regularMemes}
                onUpvote={handleUpvote}
                onDownvote={handleDownvote}
              />
            }
          />
          <Route path="/" element={<Navigate to="/regular" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
