
const express = require("express");
const app= express();

const usersRoute= require('./routes/usersRoute')
const authRoute= require('./routes/authRoute')
const todoRoute= require('./routes/todoRoute')

app.use(express.json());
//port
const port = process.env.PORT || 8800

app.use("/api/auth" , authRoute);
app.use("/api/users" , usersRoute);
app.use("/api/todo" , todoRoute);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});