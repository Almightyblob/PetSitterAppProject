const express = require("express");
const connectDB = require("./config/db");
const app = express();

//Connect Database
connectDB();

//Init Middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("API Running"));

//Define routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
// app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/customers", require("./routes/api/customers"));
app.use("/api/pets", require("./routes/api/pets"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./index.html"));
});
//npm run server

// install components for server:
// npm i express mongoose bcryptjs config jsonwebtoken express-validator request --s
//npm i -D nodemon concurrently

// install components for client:
//npm i axios react-router-dom redux react-redux reduct-thunk redux-devtools-extension moment react-moment bulma bulma-helpers uuid --s
