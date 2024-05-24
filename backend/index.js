
const express = require("express");
const app= express();
const dotenv = require("dotenv");
const cors = require("cors");

const todos = require('./routes/todoRoute')

app.use(express.json());
dotenv.config();
app.use(cors());

//port
const port = process.env.PORT || 8800

app.use('/api',todos)

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});