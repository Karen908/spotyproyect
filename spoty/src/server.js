const express = require('express');
const get_items = require('./db/get_items');
const app = express();
app.use(express.json());
const PORT = 3003
app.listen(3003, () => {console.log(`Funcionando en ${PORT}`)});

app.get('/', async (req, res) => {
    const query = await get_items();
    return res.status(201).json(query);
})