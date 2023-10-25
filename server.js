const express = require("express");
const cors = require("cors"); // CORS: Cross Origin Resource Sharing
const app = express();
const userRoutes = require("./routes/users");
const transactionsRoute = require("./routes/transactions");
const axios = require('axios');




const PORT = process.env.PORT || 8080; // Set server port from .env file
app.use(express.static('./public'));
app.use(cors());
app.use(express.json());




//Routes
app.use("/users" , userRoutes );
app.use("/transactions", transactionsRoute);




app.listen(PORT , () => console.log(`Server running at http://localhost:${PORT}`));