const express = require('express');
const cors = require('cors');
const usersRoutes = require("./Routes/V1/users.route");
const errorHandler = require('./Middlewares/errorHandler');
const app = express();
const port = process.env.PORT || 5000;


// Middlewares
app.use(cors());
app.use(express.json());


// Routes
app.use("/api/v1/users", usersRoutes);


// API's

app.get('/', (req, res) => {
    res.send("Running NodeJS Assignment Server...")
});

app.all("*", (req, res) => {
    res.send("No Results Found");
});

app.use(errorHandler);

app.listen(port, () => {
    console.log("Listen to Port", port);
});


// Express Unhandled Error
process.on("unhandledRejection", (error) => {
    console.log(error.name, error.message);
    app.close(() => {
        process.exit(1)
    })
});



