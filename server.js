const express = require("express");
require("dotenv").config();
const connectDB = require("./config/db");
const {
  usersRouter,
  authRouter,
  profileRouter,
  postsRouter,
} = require("./routes/api");

const app = express();

const { PORT = 5000 } = process.env;

connectDB();

app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/users", usersRouter);
app.use("/api/auth", authRouter);
app.use("/api/profile", profileRouter);
app.use("/api/posts", postsRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  console.log("express error handler");
  res.status(status).json({ message });
});

app.listen(PORT, () => console.log(`Server stated on port ${PORT}`));
