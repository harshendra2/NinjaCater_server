const mongoose = require("mongoose");

const DB = process.env.DATABASE;

mongoose.connect("mongodb+srv://harshendra:Narayana20Ha@cluster0.misnwgb.mongodb.net/CaterNinja", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
})
  .then(() => console.log("Database connected"))
  .catch((error) => {
    console.log("Error:", error);
  });
