const express = require("express");

const app = express();
const PORT = 3001;

// middleware to parse JSON
app.use(express.json());

// default route
app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

// start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
