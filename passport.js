const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GithubStrategy = require("passport-github2").Strategy;

const passport = require("passport");

const GOOGLE_CLIENT_ID =
  "215950114515-mfnc6g26v1vrv2gc3jfgcdf0v6mtfdlj.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

GITHUB_CLIENT_ID = "0d20e8d002e540c33e1d";
GITHUB_CLIENT_SECRET = "4553cbb00c02132baba420306c62f49b62762bf9";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new GithubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
