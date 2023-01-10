const express = require("express");
const path = require("path");
const { default: mongoose } = require("mongoose");
require("dotenv").config();
const {
  usersRouter,
  authRouter,
  profileRouter,
  postsRouter,
} = require("./routes/api");

const app = express();

const { PORT = 5000, MONGO_URI } = process.env;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};
connectDB();

app.use(express.json({ extended: false }));

app.use(express.static("client/build"));

app.use("/api/users", usersRouter);
app.use("/api/auth", authRouter);
app.use("/api/profile", profileRouter);
app.use("/api/posts", postsRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () => console.log(`Server stated on port ${PORT}`));
