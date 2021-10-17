import express from "express";
import surveyRoutes from "./api/routes/survey.js";
import morgan from "morgan";

const PORT = 5000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));

//Routes
app.use("/survey", surveyRoutes);

//Default handler
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.stack, //DEV STACK
    },
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on: http://localhost:${PORT}`);
});
