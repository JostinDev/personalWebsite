import React from "react";
import Navbar from "./component/navbar";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./view/home";
import Projects from "./view/projects";
import Blog from "./view/blog";

function App() {
  return (
    <div>
        <Router>
            <Navbar/>
            <Route exact path='/home'>
                <Home/>
            </Route>
            <Route exact path='/projects'>
                <Projects/>
            </Route>
            <Route exact path='/blog'>
                <Blog/>
            </Route>
        </Router>
    </div>
  );
}

export default App;
