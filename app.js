const express = require('express');
const surveyRoutes = require("./routes/survey");

const PORT = 5000;
const app = express();

app.use(express.json());

//Sign Up endpoints
app.get("/survey",surveyRoutes);
//Default page
app.get('/',(req, res) => {
    console.log("Initial page");
    res.status(200).send('Hello world');
})

app.listen(PORT, () => {console.log(`Server is running on: http://localhost:${PORT}`);})