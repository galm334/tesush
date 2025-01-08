const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;  // Render requires this

app.get("/", (req, res) => {
  res.send("Hello from Render deployment!");
});

// Make sure your app is listening on a port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
