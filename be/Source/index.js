// Import Librabries
import express from "express";
import bodyParser from "body-parser";

// Import Files
import Routes from "./Routes/index.js";

// Declare constants using in Backend Server
const app = express();
const port = 3300;

// Declare middlewares using universally in Backend Server
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

Routes(app);

app.listen(port, () => {
  console.log(`Backend server is running on port: ${port}`);
});
