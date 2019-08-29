import React, { Component } from 'react'

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Header from './components/Header'
import HomePage from './components/HomePage'
import PreviousGames from './components/PreviousGames'
import About from './components/About'

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <section className="nav-bar">
          <nav>
            <h4 className="nav-link">
              <Link to="/">Home</Link>
            </h4>
            <h4 className="nav-link">
              <Link to="/pastgames">Past Games</Link>
            </h4>
            <h4 className="nav-link">
              <Link to="/about">About</Link>
            </h4>
          </nav>
        </section>
        <section></section>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/pastgames" component={PreviousGames}></Route>
        </Switch>
      </Router>
    )
  }
}

export default App
