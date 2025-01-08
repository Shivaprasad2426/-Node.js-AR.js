const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static files from the root directory
app.use(express.static(path.join(__dirname)));

// Route to serve the index page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});