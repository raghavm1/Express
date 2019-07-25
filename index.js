const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const logger = require("./middleware/logger");
//app.use(logger);
const app = express();
const members = require("./Members");

//Handlebars middleware
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Homepage route
app.get("/", (req, res) =>
  res.render("index", {
    title: "Member App",
    members
  })
);

//Static folder setting
//app.use(express.static(path.join(__dirname, "public")));

//Members API routes
app.use("/api/members", require("./routes/api/members"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
