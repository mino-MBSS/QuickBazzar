const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const cors = require('cors');

require('dotenv').config();
require('./connections/mongodb-con');

const userController = require("./controllers/userController");
const productRouter = require('./routes/productRoutes');
const sellerRouter = require('./routes/sellerRoutes');
const cartRouter = require('./routes/cartRoutes');

// middlewares
app.use(cors());
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/api/signup',userController.signUp);
app.post('/api/login', userController.logIn);

app.use('/api/products', productRouter);
app.use('/api/seller', sellerRouter);
app.use('/api/cart', cartRouter);

const port = process.env.PORT || 8080;
app.listen(port, ()=>{
    console.log(port);
    console.log(`App running on port: ${port}`);
})