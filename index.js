const express = require('express');
const app = express();
const port = 3000;

// API 1: Return a simple message
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello, World!' });
});

// API 2: Return dummy user data
app.get('/api/user', (req, res) => {
    res.json({
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com'
    });
});

//dummy api
app.get('/api/product', (req, res) => {
    res.json({
        id: 1,
        name: 'Aws EC2 Online Test',
        Price: 499
    })
})

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});