const express = require("express");

const app = express();
app.use(express.json());

const registrations = [];

app.post("/register", (req, res) => {
  registrations.push(req.body);

  res.json({
    message: "Registration Successful"
  });
});

app.get("/registrations", (req, res) => {
  res.json(registrations);
});

app.listen(3000, () => {
  console.log("Service running on port 3000");
});
