import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import TrollList from './TrollList';

const Trolls = ({ trolls }) => {
  return <div className="App">{trolls ? <TrollList trolls={trolls} /> : <h1>FETCHING DATA</h1>}</div>;
};

export default Trolls;
