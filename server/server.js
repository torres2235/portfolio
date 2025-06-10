const express = require("express");
const mongoose = require("mongoose");
const Comment = require("./models/comment.model");

const app = express();
const cors = require("cors");
const corsOptions = {
  origin: ["http://localhost:5173"],
};
app.use(express.json());
app.use(cors(corsOptions));

// app.get("/api", (req, res) => {
//   res.json({ users: ["user1", "user2", "user3", "lastuser"] });
// });

app.post("/api", async (req, res) => {
  try {
    const comment = await Comment.create(req.body);
    res.status(200).json(comment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

mongoose
  .connect(
    "mongodb+srv://torres2235:UD9aYpRVbN0Rlxm1@backenddb.jydpk6z.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to database");
    app.listen(8080, () => {
      console.log("Server started on port 8080");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });
