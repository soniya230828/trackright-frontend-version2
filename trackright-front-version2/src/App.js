import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RoutesPath from "./Routes"; 
import Mainindex from './components/Layout/Main'; 
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Mainindex />}>
            {RoutesPath.map((route, index) => (
              <Route key={index} path={route.path} element={<route.content />} />
            ))}
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
