const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;
const usernameGmail= process.env.GMAIL_USERNAME;
const passwordGmail = process.env.PASSWORD_USERNAME;

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

// The model of documents
const FormData = require('./FormData'); 

const transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
        user: usernameGmail, 
        pass: passwordGmail, 
    },
});

// Post 
app.post('/', async (req, res) => {
    try {
        const { firstline, secondline, thirdline, fourdline } = req.body;

        // Criar um novo documento no MongoDB
        const formData = new FormData({ firstline, secondline, thirdline, fourdline });
        await formData.save(); // Salvar no banco de dados

        const mailOptions = {
            from: usernameGmail, 
            to: usernameGmail, 
            subject: `New message from the portfolio form from${firstline}`, 
            text: `
                Name: ${firstline}
                Contact: ${secondline}
                Subjective: ${thirdline}
                Mensagem: ${fourdline}
            `, 
        };
        
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error to send the e-mail to my inbox:', error); 
            } else {
                console.log('Mail sendo to my personal inbox!:', info.response); 
            }
        });

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