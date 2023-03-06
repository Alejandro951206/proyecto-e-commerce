import React from 'react';
import './App.css';
import {BrowserRouter as Router,  
  Routes,
  Route  
} from "react-router-dom";
import Landing from '../src/components/pages/Landing';
import ArticlesMain from "../src/components/pages/ArticlesPage";
import AboutUs from '../src/components/pages/AboutUs';




function App() {
  return (
    <Router>
       
       <div className="App">
       <Routes>
          <Route exact path='/' component={Landing} />
          <Route exact path='/pages/ArticlesMain' component={ArticlesMain} /> 
          <Route exact path='/pages/about' component={AboutUs} />           
      </Routes>
      </div>
      
    </Router>
  );
}

export default App;

