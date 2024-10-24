const express = require("express");
require("dotenv").config();
const connectDB = require("./config/database.js");
const app = express();
const Book = require("./models/bookModel.js");
const port = process.env.PORT || 5000;
const routes = require("./routes/books.js");


app.use("/", routes);
app.use(express.json());


// database connectivity and listening
connectDB().then(() => {

console.log("MongoDB connected");
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
})

}
).catch(err => console.log(err));



