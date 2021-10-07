const http = require("http");
const server = http.createServer();
const mongoose = require("mongoose");

// Import carSchema
const carModel = require("./models/carModel");

// New carModel instance
const car = new carModel({
  brand: "Renault",
  model: "Espace",
  year: 1999,
});

console.log(car);

// creat a newCar to collection
car
  .save()
  .then((newCar) => {
    console.log("New Car !", newCar);
  })
  .catch((error) => {
    console.log("Error MongoDB", error);
  });

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/garage", (error) => {
  if (error) {
    console.error(error); // Show error to MongoDB
    process.exit(1); // Quit App
  }
  console.log("MongoDB connected Successfully");
}); // databse name : garage

server.listen(3000, () => {
  console.log(`Nodejs server started on port ${3000}`);
});
