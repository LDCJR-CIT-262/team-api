const express =require('express');

const port = 3000;

const app = express();

app.get('/', (req,res) => {res.send("Hello Browser")});

app.get('/Riley', (req,res) => {res.send("Hello Riley")});

app.listen(port, ()=>console.log("Listening"));