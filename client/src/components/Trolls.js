import React from 'react';
import TrollList from './TrollList';

const Trolls = ({ trolls }) => {
  return <div className="App">{trolls ? <TrollList trolls={trolls} /> : <h1>FETCHING DATA</h1>}</div>;
};

export default Trolls;
