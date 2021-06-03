import express from "express";
import path from "path";

import { PrismaClient } from ".prisma/client";
import { initializeUserApi } from "./src/endpoints/user";

const prisma = new PrismaClient();
const app = express();
var cors = require("cors");

require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static("public"));

app.use(function (req, res, next) {
  // Uncomment for local development
  // res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Origin", "https://gameboardgroup.com");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin,X-Requested-With,Content-Type,Accept,content-type,application/json");
  next();
});

// Serve static files
app.use(express.static(path.join(__dirname, "client/build")));

app.get(`/api`, async (req, res) => {
  res.json({ up: true });
});

initializeUserApi(app, prisma);

// Redirect back to index.html if urls do not match
if (process.env.NODE_ENV === 'production') {
  app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

const PORT = process.env.PORT || 9000;
const server = app.listen(PORT, () =>
  console.log(
    `🚀 Server ready at: http://localhost:${PORT}\n⭐️ See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api`
  )
);
