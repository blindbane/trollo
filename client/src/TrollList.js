import React from 'react';
import Troll from './Troll';

const TrollList = ({ trolls }) => {
  return <div>{trolls.map(({ _id, body }) => <Troll key={_id} body={body} />)}</div>;
};

export default TrollList;
