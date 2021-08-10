import React from "react"
import Home from './Home'
import About from './About'
import NavBar from './NavBar'
import NotFound from "./404"
import { BrowserRouter as ReactRouter, Switch, Route } from "react-router-dom"

const App = () => {
  
  return(
    <React.Fragment>
      <ReactRouter>
        <NavBar />

        <Switch>
          <Route exact path = "/">
            <Home />
          </Route>
          <Route exact path = '/about'>
            <About />
          </Route>
          <Route exact path = "/*">
            <NotFound />
          </Route>
        </Switch>
        
      </ReactRouter>
    </React.Fragment>
  );
}

export default App
