const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const http = require("http");
const app = express();
const port = process.env.PORT || 8082;
const server = http.createServer(app);
const userRouter = require("./routes/userRouter");
const matchRouter = require("./routes/matchRouter");
const tournamentRouter = require("./routes/tournamentRouter");
const teamRouter = require("./routes/teamRouter");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/yourDatabase", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/", (req, res) => res.send("Ares Server"));

server.listen(port, () => console.log(`Ares server running on port ${port}`));
app.use(express.json());
app.use(cookieParser());

app.use("/api/users", userRouter);
app.use("/api/matches", matchRouter);
// app.use("/api/tournaments", tournamentRouter);
app.use("/api/teams", teamRouter);
