const express = require("express");
const path = require("path");
const indexRouter = require("./routes/indexRouter");

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter);

const PORT = 3300;
app.listen(PORT, () => console.log(`listening on port ${PORT}!`));
