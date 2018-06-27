import React from 'react';
import Troll from './Troll';

const TrollList = ({ trolls }) => {
  return <div>{trolls.map(({ _id, body, title }) => <Troll key={_id} body={body} title={title} />)}</div>;
};

export default TrollList;
