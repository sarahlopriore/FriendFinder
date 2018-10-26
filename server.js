var express = require("express");

var app = express();
var PORT = process.env.PORT || 7500;

var apiRoutes = require("./app/routing/apiRoutes");
var htmlRoutes = require("./app/routing/htmlRoutes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(apiRoutes);
app.use(htmlRoutes);



app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
})

