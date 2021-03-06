import React from "react"
import Home from './Home'
import About from './About'
import NavBar from './NavBar'
import NotFound from "./404"
import Book from "./Book"
import Billing from './Billing.js'
import PDF from './PDF'
import { BrowserRouter as ReactRouter, Switch, Route } from "react-router-dom"
import Extras from "./Extras"

const App = () => {
  
  return(
    <React.Fragment>
      <ReactRouter>
        <NavBar />
        <Switch>
          <Route exact path = "/ten-tick">
            <Home />
          </Route>
          
          <Route exact path = "/book/:data">
            <Book />
          </Route>
          
          <Route exact path = '/extras/:data'>
            <Extras />
          </Route>
          
          <Route exact path = '/billing/:data'>
            <Billing />
          </Route>
          
          <Route exact path = '/generateTick/:data'>
            <PDF />
          </Route>
          
          <Route path = "/*">
            <NotFound />
          </Route>
        </Switch>
      </ReactRouter>
    </React.Fragment>
  );
}

export default App
