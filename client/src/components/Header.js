import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ givenName, avatarUrl }) => {
  return (
    <div>
      <header className="App-header">
          <nav>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/trolls">TROLLS</Link>
            </li>
            <li>
              <Link to="/trolls/add">REPORT A TROLL</Link>
            </li>
            <li>
              <Link to="/profile">PROFILE</Link>
            </li>
          </nav>
          {givenName ? (<div>Hi, {givenName} <span><img src={avatarUrl} alt={`${givenName} Avatar`} /></span></div>) : (<a href="/api/auth/google">Login with Google</a>)}
        </header>
    </div>
  );
};

export default Header;