const cookieSession = require("cookie-session");
const express = require("express");
const cors = require("cors");
const passportSetup = require("./passport");
const passport = require("passport");
const authRoute = require("./routes/auth");
const app = express();

app.use(
  cookieSession({ name: "session", keys: ["kavu"], maxAge: 24 * 60 * 60 * 100 })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use("/auth", authRoute);

app.use((req, res) => {
  res.status(404).json({
    success: true,
    message: "am always present",
  });
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is running!");
});

app.get("/", (req, res) => res.send(`Server Running`));
