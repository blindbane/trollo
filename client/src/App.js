import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import axios from 'axios';
import './App.css';

import Home from './components/Home';
import Trolls from './components/Trolls';
import Profile from './components/Profile';
import AddTroll from './components/AddTroll';
import Header from './components/Header';

class App extends Component {
  state = {
    trolls: [],
    givenName: undefined,
    familyName: undefined,
    displayName: undefined,
    avatarUrl: undefined
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

      axios.get('/api/auth/current_user').then(res => res.data).then(data => {
        this.setState({
          givenName: data.givenName,
          familyName: data.familyName,
          displayName: data.displayName,
          avatarUrl: data.avatarUrl
        })
      })
  }

  render() {
    const {givenName, avatarUrl} = this.state;
    return (
      <div className="App">
        <Header givenName={givenName} avatarUrl={avatarUrl}/>
        {/* <header className="App-header">
          <nav>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/trolls">TROLLS</Link>
            </li>
            <li>
              <Link to="/trolls/add">REPORT A TROLL</Link>
            </li>
            <li>
              <Link to="/profile">PROFILE</Link>
            </li>
          </nav>
          {this.state.givenName ? (<div>Hi, {this.state.givenName} <span><img src={this.state.avatarUrl} alt={`${this.state.givenName} Avatar`} /></span></div>) : (<a href="/api/auth/google">Login with Google</a>)}
        </header> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/trolls" render={() => <Trolls trolls={this.state.trolls} />} />
          <Route path="/trolls/add" render={() => <AddTroll />} />
          <Route path="/profile" render={() => <Profile />} />
          <Route component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
