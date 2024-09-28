const express = require('express');
const app = express();
const SERVER_PORT = process.env.port || 3000;


app.get('/hello', (req, res) => {
    res.send('<h1>Hello Express JS</h1>');
});

app.get('/user', (req, res) => {
    const firstName = req.query.firstname
    const lastName = req.query.lastname
    res.send({"firstname":firstName,"lastname":lastName})
});

app.post('/user/:firstname/:lastname', (req, res) => {
    const firstName = req.params.firstname
    const lastName = req.params.lastname
    res.send({"firstname":firstName,"lastname":lastName})
});


app.listen(SERVER_PORT, () => {
    console.log(`Server is running on port http://localhost:${SERVER_PORT}`);
})
