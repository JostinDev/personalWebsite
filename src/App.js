import React from 'react'
import Navbar from './component/navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './view/home'
import Projects from './view/projects'
import Blog from './view/blog'
import NotFound from './view/404'

function App () {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/projects'>
            <Projects />
          </Route>
          <Route exact path='/blog'>
            <Blog />
          </Route>
          <Route path=''>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
