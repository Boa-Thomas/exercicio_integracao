const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Include CORS module

const app = express();
app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes

app.post('/multiplicar', (req, res) => {
    const valor1 = parseFloat(req.body.valor1);
    const valor2 = parseFloat(req.body.valor2);
    const resultado = valor1 * valor2;
    res.send(`O resultado é ${resultado}`);
});

app.post('/dividir', (req, res) => {
    const valor1 = parseFloat(req.body.valor1);
    const valor2 = parseFloat(req.body.valor2);
    const resultado = valor1 / valor2;
    res.send(`O resultado é ${resultado}`);
});

app.post('/somar', (req, res) => {
    const valor1 = parseFloat(req.body.valor1);
    const valor2 = parseFloat(req.body.valor2);
    const resultado = valor1 + valor2;
    res.send(`O resultado é ${resultado}`);
});

app.post('/subtrair', (req, res) => {
    const valor1 = parseFloat(req.body.valor1);
    const valor2 = parseFloat(req.body.valor2);
    const resultado = valor1 - valor2;
    res.send(`O resultado é ${resultado}`);
});

const PORT = 25565;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
