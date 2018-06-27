import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import axios from 'axios';
import './App.css';

import Home from './components/Home';
import Trolls from './components/Trolls';
import Profile from './components/Profile';

class App extends Component {
  state = {
    trolls: [],
  };
  componentDidMount() {
    axios
      .get('/api/trolls')
      .then(res => res.data)
      .then(({ trolls }) => {
        this.setState({
          trolls,
        });
      });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav>
            <li>
              <Link exact to="/">
                HOME
              </Link>
            </li>
            <li>
              <Link to="/trolls">TROLLS</Link>
            </li>
            <li>
              <Link to="/profile">PROFILE</Link>
            </li>
          </nav>
        </header>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/trolls" render={() => <Trolls trolls={this.state.trolls} />} />
          <Route path="/profile" render={() => <Profile />} />
        </Switch>
      </div>
    );
  }
}

export default App;
