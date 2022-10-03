const mongoose = require("mongoose");

//conection4
const url =  `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_NAME}.fes9q2c.mongodb.net/?retryWrites=true&w=majority`
mongoose
  .connect(
   "mongodb://localhost:27017/resumeBuilder"
  )
  .then(() => console.log("Connected"))
  .catch((Eror) => console.log("Error", Eror));
