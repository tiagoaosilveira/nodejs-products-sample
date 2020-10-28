const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser'); 
const dotenv = require("dotenv-safe").config();
const loginRoutes = require('./src/routes/login');
const productsRoutes = require('./src/routes/product');
const cors = require('cors');
const app = express();
const port = 3001;

// Cookie/Body Parsers and Cors
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

// Routes
app.use('/login', loginRoutes);
app.use('/products', productsRoutes);

// Start Server
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})