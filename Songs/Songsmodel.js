const mongoose = require("mongose");
mongoose.connect(
  "mongodb+srv://Alan-matea:Matea2020@prueba-db.vrgps.mongodb.net/Mateify?retryWrites=true&w=majority",
  { useUnifiedTopology: true, useNewUrlParser: true }
);

const Schema = mongoose.Schema;



new Schema({
  name: String,
  artist: String
});


mongoose.model(,Schema)



