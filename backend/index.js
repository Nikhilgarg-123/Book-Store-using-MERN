const express = require("express");
require("dotenv").config();
const connectDB = require("./config/database.js");
const app = express();
const Book = require("./models/bookModel.js");
const port = process.env.PORT || 5000;
const routes = require("./routes/books.js");
const cors = require("cors");

// routes 
app.use(express.json());  

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');  // Allow all origins or specify a domain
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');  // Specify allowed methods
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');  // Specify allowed headers

  next();
});


app.use(cors());
app.use("/", routes);


// database connectivity and listening
connectDB().then(() => {
 
console.log("MongoDB connected");
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
})

}
).catch(err => console.log(err));



