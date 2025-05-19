// server.js
const express = require('express');
// const multer = require("multer");
// const fs = require("fs");
// const axios = require('axios');

const app = express();
const port = 3000; // You can choose any port you like

const path = require('path');

// Serve basic index.html
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
  