require('dotenv').config();
const app = require('express')();


app.get('/user', (req, res) => {

    const data = [
        {
            name: 'Thiago Cabral',
            email: 'thiago@gmail.com',
            office: 'full stack Javascript development',
        },
        {
            name: 'Rogerio M.',
            email: 'rogerio@gmail.com',
            office: 'full stack Javascript'
        }
    ]

    res.status(200)
        .json(data);
});

module.exports = app;