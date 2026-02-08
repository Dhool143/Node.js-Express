import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;


app.get('/', (req, res) => {
    res.send('Hello World');
});


app.get('/about', (req, res) => {
    res.send('About page');
});


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


app.get(/\/user(name)?$/, (req, res) => {
    res.send('Matched /user or /username via Regular Expression');
});



app.get('/user/:username', (req, res) => {
    const name = req.params.username;
    res.send(`Hello ${name}`);
});


app.get('/get', (req, res) => {
    console.log('Query String Parameters:', req.query);
    res.send('Query parameters logged to the terminal console.');
});


app.use((req, res) => {
    res.status(404).send('404 - Not Found');
});

app.listen(PORT, () => {
    console.log(`Server started successfully! Listening at http://localhost:${PORT}`);
});

