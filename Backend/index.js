const express = require("express");
const app = express();
const cors = require("cors");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const mongoose = require('mongoose');



mongoose
  .connect(
    "mongodb+srv://afmtoday:OlxwPFCF0rLMnA3e@cluster0.edrrjyh.mongodb.net/ketero?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB", err));

// App configuration
app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
  })
);


// Swagger configuration
const swaggerSpec = swaggerJsdoc({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'KeteroWeb',
      version: '1.0.0',
      description: 'Ketero 1.0 Web App API documentation',
    },
  },
  apis: ['./routes/*.js'], // Specify the file(s) where JSDoc annotations are present
});
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Route imports  
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
const serviceRoutes = require("./routes/serviceRoutes");
const businessRoutes = require('./routes/businessRoutes');
const reservationRoutes = require("./routes/reservationRoutes");
const clientRoutes = require("./routes/clientRoutes");
const mezgebuRoutes = require("./routes/mezgebuRoutes");



// Route definitions
VERSION = "v1";
app.use(`/api/${VERSION}/user`, userRoutes);
app.use(`/api/${VERSION}/auth`, authRoutes);
app.use(`/api/${VERSION}/business`, businessRoutes);
app.use(`/api/${VERSION}/service`, serviceRoutes);
app.use(`/api/${VERSION}/reservations`, reservationRoutes);
app.use(`/api/${VERSION}/client`, clientRoutes);
app.use(`/api/${VERSION}/mezgebu`, mezgebuRoutes);

app.listen(4000, ()=>{
    console.log("Connected") }
)

module.exports = app;
