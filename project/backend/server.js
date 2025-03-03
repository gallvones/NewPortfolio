const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;
const app = express();
const PORT = 3002;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// DB connect
const connectToDataBase = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${username}:${password}@nodetest.n0wqc.mongodb.net/PortfolioFormsDB?retryWrites=true&w=majority&appName=NodeTest`);
        console.log('Conexão com o banco bem sucedida!');
    } catch (error) {
        console.error('Ocorreu um erro ao conectar com o banco de dados:', error);
    }
};
connectToDataBase();

// Importar o modelo
const FormData = require('./FormData'); // Certifique-se de que o caminho está correto

// Post rota
app.post('/', async (req, res) => {
    try {
        const { firstline, secondline, thirdline, fourdline } = req.body;

        // Criar um novo documento no MongoDB
        const formData = new FormData({ firstline, secondline, thirdline, fourdline });
        await formData.save(); // Salvar no banco de dados

        res.status(200).json({ message: 'Dados salvos com sucesso!' });
    } catch (error) {
        console.error('Erro ao processar dados:', error);
        res.status(500).json({ message: 'Erro ao processar dados' });
    }
});

// Iniciating server
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});