const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("./public"));

app.set("view engine", "ejs");
app.set('views', path.join(__dirname, '/views'));

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const indexRouter = require('./routers/indexRouter');

app.listen(3001, () => {
    console.log(`Server is running on http://localhost:3001`);
});

// Routes
app.use('/', indexRouter);