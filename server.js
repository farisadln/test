const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");

const app = express();

let corsOptions = {
    origin: "http://localhost:4001"
};

app.use(cors(corsOptions));
app.use(bodyParser.json());


app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./src/models");
const Role = db.role;


db.sequelize.sync();

// db.sequelize.sync({force: true}).then(() => {
//     console.log('Drop and Resync Db');
//     initial();
// });





app.get("/", (req, res) => {
    res.json({ message: "Welcome to running application." });
});

// routes
require('./src/routes/csvRoutes')(app);



const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});