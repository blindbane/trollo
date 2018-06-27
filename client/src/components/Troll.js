import React from 'react';

const Troll = ({ body, title }) => {
  return (
    <div style={{ border: '1px solid black' }}>
      <div>Title: {title}</div>
      <div>The troll: {body}</div>
    </div>
  )
};

export default Troll;
