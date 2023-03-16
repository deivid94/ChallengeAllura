import express from 'express';

const app = express();
app.use(express.json());

const livros = [
    {id: 1, livros:'senhor dos aneis' },
    {id: 2, livros:'hobbit' }
]


app.get('/',(req, res)=>{
    res.status(200).send('Challenge Allura');
})

app.get('/livros',(req, res)=>{
    res.status(200).json(livros)
})

export default app;