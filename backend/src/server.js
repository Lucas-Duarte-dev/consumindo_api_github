const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.get('/api', async (req, res) => {
    try {
        const {data} = await axios('https://api.github.com/users/Lucas-Duarte-dev/repos');         
        return res.json(data);
    } catch (error) {
        res.status(400).json({err: error})
    }
});


app.listen(3333);