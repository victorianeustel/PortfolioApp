import './App.css';
import * as React from "react";
import NotFound from './components/Navigation/notfound';
import Home from './components/Home/home';
import ProjectDetail from './components/ProjectDetails/projectdetail';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Test from './components/test';
import Contact from './components/Navigation/contact';
import About from './components/Navigation/about';
import Links from './components/Navigation/links';
import Carousel from './components/ProjectDetails/Carousel/carousel';


function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/projects/:id'element={<ProjectDetail  />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/links' element={<Links />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
  );
}

export default App;
