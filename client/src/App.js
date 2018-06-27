import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

import TrollList from './TrollList';

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
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {this.state.trolls ? <TrollList trolls={this.state.trolls} /> : <h1>FETCHING DATA</h1>}
        </p>
      </div>
    );
  }
}

export default App;
