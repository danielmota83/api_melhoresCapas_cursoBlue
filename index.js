import express from 'express';
import cors from 'cors';
import connectToDatabase from './src/database/mongoConnection.js';
import caparoutes from './src/routes/routes.js';
import 'dotenv/config';

const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(cors());
app.use('/', caparoutes);
app.use(express.urlencoded({ extended: true }));

connectToDatabase();

app.listen(port, () =>{
    console.log(`Servidor rodando em http://localhost:${port}`);
});
