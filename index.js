const express = require('express');
const cors = require('cors');
const usersRoutes = require("./Routes/V1/users.route");
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

app.listen(port, () => {
    console.log("Listen to Port", port);
});



