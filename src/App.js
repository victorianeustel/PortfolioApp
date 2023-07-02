import './App.css';
import * as React from "react";
import NotFound from './components/Navigation/notfound';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChildPage from './components/ChildPage/ChildPage';
import About from './components/ChildPage/About';
import HomePage from './components/HomePage/Home';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/projects/:id'element={<ChildPage  />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
  );
}

export default App;
