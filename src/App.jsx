import React from 'react';
import './App.css';
import {BrowserRouter as Router,  
  Routes,
  Route  
} from "react-router-dom";
import Landing from './components/pages/Landing';
import ArticlesPages from "./components/pages/ArticlesPages";
import AboutUs from './components/pages/AboutUs';




function App() {
  return (
    <Router>        
       <Routes>
          <Route path='/' element={<Landing />}/>
          <Route path='/pages/ArticlesPages' element={<ArticlesPages />}/> 
          <Route path='/pages/AboutUs' element={<AboutUs />}/>           
      </Routes>     
    </Router>
  );
}

export default App;

