import React from 'react';

const UserMenu = ({ givenName, avatarUrl }) => {
  return (
    <div>
    {givenName ? (<div>Hi, {givenName} <span><img src={avatarUrl} alt={`${givenName} Avatar`} />
          <div>
            <a href="/api/auth/logout">LOGOUT</a>
          </div>
      </span>
      </div>) : (<div><a href="/api/auth/google">SignUp</a><span>{` / `}</span><a href="/api/auth/google">SignIn</a></div>)}
    </div>
  );
};

export default UserMenu;