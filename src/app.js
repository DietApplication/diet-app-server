const express = require('express');
const surveyRoutes = require("./api/routes/survey");
const morgan = require('morgan');
const {swaggerOptions} = require('./config/config');
const swaggerUI = require("swagger-ui-express");
const swaggerJSDoc = require('swagger-jsdoc');

const PORT = 5000;
const app = express();
const swaggerDocs = swaggerJSDoc(swaggerOptions);

app.use(express.urlencoded({extended: true})); 
app.use(express.json());
app.use(morgan('dev'));

//Swagger
app.use('/api-docs',swaggerUI.serve, swaggerUI.setup(swaggerDocs));
//Routes
app.use("/survey",surveyRoutes);

//Default handler
app.use((req,res,next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
});

app.use((error,req,res,next) => {
    res.status(error.status || 500);
    res.json({
        error:{
            message: error.message
        }
    });
});

app.listen(PORT, () => {console.log(`Server is running on: http://localhost:${PORT}`);})