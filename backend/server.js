const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRoutes = require("./routes/userRoutes")
const cors = require("cors")

const app = express();
const PORT = 5000; // or any other port number you prefer

// Add middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Set up routes for user registration and login
mongoose.connect("mongodb+srv://akash:akash@cluster0.o8cde90.mongodb.net/crudpost?retryWrites=true&w=majority")
.then(()=> {
  console.log("DB CONNECTED");
}).catch((err)=>{
  console.log(err);
})
app.use(cors())
app.use("/api/users", userRoutes)
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
