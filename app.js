const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');

dotenv.config(); 

mongoose.connect(process.env.DB_CONNECT, 
{ useNewUrlParser: true, useUnifiedTopology: true },
() => { console.log('DB OK!') })

app.use(express.json());

app.use(cors())

app.use('/api/user', authRoute);

app.use('/api/posts', postRoute);

const port = process.env.port || 3000;
app.listen(port, () => console.log('Server OK!'));