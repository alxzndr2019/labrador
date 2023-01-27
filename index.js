const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const http = require("http");
const app = express();
const port = process.env.PORT || 8082;
const server = http.createServer(app);

app.get("/", (req, res) => res.send("Ares Server"));

server.listen(port, () => console.log(`Ares server running on port ${port}`));
app.use(express.json());
app.use(cookieParser());
