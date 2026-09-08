const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello from app-one! This is a demo Node.js app for security scanning.');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
