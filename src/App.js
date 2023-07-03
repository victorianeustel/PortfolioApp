import './App.css';
import * as React from "react";
import NotFound from './Pages/NotFound/notfound';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChildPage from './Pages/ChildPage/ChildPage';
import About from './Pages/About/About';
import HomePage from './Pages/HomePage/Home';

function App() {

  return (

      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/projects/:id' element={<ChildPage />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>

  );
}

export default App;
