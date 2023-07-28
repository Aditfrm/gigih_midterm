const express = require("express");
const connectDB = require("./database");
const cors = require("cors");
const router = require("./routes/api");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use("/api", router);

async function init() {
  await connectDB();
  app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
  });
}

init();
