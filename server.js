const express = require('express');
const cors = require('cors');
const connectDB = require('./db');
const todosRouter = require('./Routes/todos');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// CONNECT TO DB
connectDB();

// SET UP ROUTES
app.use('/', todosRouter);

app.listen(port, () => console.log(`Server running on port ${port}`));
