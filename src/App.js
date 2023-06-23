import './App.css';
import * as React from "react";
import NotFound from './components/notfound';
import Home from './components/home';
import ProjectDetail from './components/projectdetail';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Test from './components/test';
import Contact from './components/contact';
import About from './components/about';
import Links from './components/links';
import Carousel from './components/carousel';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path='/projects/:id' element={<ProjectDetail  />} />
          <Route path='/test' element={<Carousel />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/links' element={<Links />} />

          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
  );
}

export default App;
