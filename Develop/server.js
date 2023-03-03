const express = require('express');
const path = require('path');
const { readFromFile, readAndAppend } = require('./helpers/fsUtilities');

const PORT = process.env.port || 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

// GET Route for homepage
app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, './public/index.html'))
);

// GET Route for notes page
app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, './public/notes.html'))
);

app.get('/api/notes', (req, res) =>
    res.sendFile(path.join(__dirname, './db/db.json'))
);

app.post('/api/notes', (req, res) => {
    console.info(`${req.method} notes recieved`);

    // Destructuring assignment for the items in req.body
    const { title, text } = req.body;

    // If all the required properties are present
    if (title && text) {

        const newNote = {
            title,
            text,
        };
        readAndAppend(newNote, './db/db.json');
        
        res.json(newNote);
    }
});

app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT} 🚀`)
);

