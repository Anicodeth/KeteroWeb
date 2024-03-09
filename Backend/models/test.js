const Service = require("./Service");
const { Admin, Business, Mezgeb, Client } = require("./User");
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://afmtoday:OlxwPFCF0rLMnA3e@cluster0.edrrjyh.mongodb.net/ketero?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB", err));

const service = new Service({
  name: "Service 1",
  description: "Description of Service 1",
  price: 100,
});

service
  .save()
  .then((savedService) => {
    console.log("Service saved:", savedService);
  })
  .catch((err) => {
    console.error("Error saving service:", err);
  });

// Create and save an admin
// const admin = new Admin({
//   email: 'admin@example.com',
//   password: 'adminpassword',
//   name: 'Admin Name',
// });
// admin.save();

const client = new Client({
  email: "admnin@example.com",
  password: "adminpassword",
  name: "Client Name",
});
client.save();

// Create and save a business
const business = new Business({
  email: "businessg@example.com",
  password: "businesspassword",
  businessName: "Business Name",
  OwnerName: "Business Owner",
});

business.services.push(service);
business
  .save()
  .then((savedBusiness) => {
    console.log("Business saved:", savedBusiness);
  })
  .catch((err) => {
    console.error("Error saving business:", err);
  });

// Create and save a mezgeb
const mezgeb = new Mezgeb({
  email: "mezgegb@example.com",
  password: "mezgebpassword",
  mezgebField: "Mezgeb Field",
});

mezgeb
  .save()
  .then((savedMezgeb) => {
    console.log("Mezgeb saved:", savedMezgeb);
  })
  .catch((err) => {
    console.error("Error saving mezgeb:", err);
  });
