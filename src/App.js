import './App.css';
import * as React from "react";
import NotFound from './components/notfound';
import Home from './components/home';
import ProjectDetail from './components/projectdetail';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path='/projects/:id' element={<ProjectDetail  />} />

          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}


export default App;
