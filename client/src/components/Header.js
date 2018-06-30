import React from 'react';
import { Link } from 'react-router-dom';
import UserMenu from './UserMenu'

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
          <UserMenu givenName={givenName} avatarUrl={avatarUrl} />
        </header>
    </div>
  );
};

export default Header;