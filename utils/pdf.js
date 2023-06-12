var pdf = require("pdf-creator-node");
var fs = require("fs");

var html = fs.readFileSync("template.html", "utf8");

var options = {
    format: "A3",
    orientation: "portrait",
    border: "10mm",
    height: "11in",
    width: "8.5in"
};

var document = {
    html: html,
    data: {

    },
    path: "./output.pdf",
    type: "",
}