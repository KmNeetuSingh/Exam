const express = require('express');
const app = express();

// Your server setup and routes go here

const port = 3000; // Define the port number
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
