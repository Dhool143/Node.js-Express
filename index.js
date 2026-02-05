import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

// 1. Root path (/)
app.get('/', (req, res) => {
    res.send('Hello World');
});

// 2. About path (/about)
app.get('/about', (req, res) => {
    res.send('About page');
});

// 3. CONDITIONAL ROUTING (/foo)
app.get('/foo', (req, res, next) => {
    if (Math.random() > 0.5) {
        res.send('sometimes this');
    } else {
        next(); 
    }
});

app.get('/foo', (req, res) => {
    res.send('and sometimes that');
});

//// REGULAR EXPRESSION ROUTE
// This uses a regular expression (//) instead of a string to match /user and /username.
app.get(/\/user(name)?$/, (req, res) => {
    res.send('Matched /user or /username via Regular Expression');
});

// // DYNAMIC ROUTE HANDLING (Specific Requirement)
// This captures whatever comes after /user/ as a username parameter.

app.get('/user/:username', (req, res) => {
    const name = req.params.username;
    res.send(`Hello ${name}`);
});

// 6. QUERY STRING HANDLING
app.get('/get', (req, res) => {
    console.log('Query String Parameters:', req.query);
    res.send('Query parameters logged to the terminal console.');
});

// 7. 404 ERROR HANDLING
app.use((req, res) => {
    res.status(404).send('404 - Not Found');
});

app.listen(PORT, () => {
    console.log(`Server started successfully! Listening at http://localhost:${PORT}`);
});

