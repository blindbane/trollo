import React from 'react';
import Troll from './Troll';

const TrollList = ({ trolls }) => {
  return <div>{trolls.map(({ id, description }) => <Troll key={id} description={description} />)}</div>;
};

export default TrollList;
