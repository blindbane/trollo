import React from 'react';

const UserMenu = ({ givenName, avatarUrl }) => {
  return (
    <div>
    {givenName ? (<div>Hi, {givenName} <span><img src={avatarUrl} alt={`${givenName} Avatar`} />
          <div>
            <a href="/api/auth/logout">LOGOUT</a>
          </div>
      </span>
      </div>) : (<a href="/api/auth/google">Login with Google</a>)}
    </div>
  );
};

export default UserMenu;