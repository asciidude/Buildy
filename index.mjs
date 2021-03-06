import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index', { user: req.user });
});

app.get('/dashboard', (req, res) => {
    res.render('dashboard', { user: req.user });
});

app.listen(process.env.PORT, () =>
    console.log(`Now listening on port ${process.env.PORT}`)
);