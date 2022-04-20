import React from 'react';
import {
    Routes,
    Route,
} from "react-router-dom";
import Home from './pages/Home';
import CurrentItem from './pages/CurrentItem';

function App() {
  return (
      <Routes>
          <Route path="/items/:id" element={<CurrentItem />} />
          <Route path="/" element={<Home />} />
      </Routes>
  );
}

export default App;
