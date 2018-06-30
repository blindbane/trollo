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
    const { givenName, avatarUrl, trolls } = this.state;
    return (
      <div className="App">
        <Header givenName={givenName} avatarUrl={avatarUrl}/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/trolls" render={() => <Trolls trolls={trolls} />} />
          <Route path="/trolls/add" render={() => <AddTroll />} />
          <Route path="/profile" render={() => <Profile />} />
          <Route component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
