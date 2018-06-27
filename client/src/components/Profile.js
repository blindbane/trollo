import React from 'react';

const Profile = () => {
  return (
    <div>
      Profile<div>
        <a href="/api/auth/google">Login with Google</a>
      </div>
      <div>
        <a href="/api/auth/logout">LOGOUT</a>
      </div>
    </div>
  );
};

export default Profile;
