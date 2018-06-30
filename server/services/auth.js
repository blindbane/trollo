const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const User = require('../db/models/User');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: '/api/auth/google/callback',
      proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });
      console.log('profile', profile);
      if (existingUser) {
        // user with given profile ID already exists
        return done(null, existingUser);
      }
      // save new user
      const user = await new User({
        googleId: profile.id,
        givenName: profile.name.givenName,
        familyName: profile.name.familyName,
        displayName: profile.displayName,
        avatarUrl: profile.photos[0].value
      }).save();

      return done(null, user);
    },
  ),
);
