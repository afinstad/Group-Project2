var path = require("path")

module.exports = function (app) {
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/views/index.html"))
    })
    app.get("/administrator", function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/views/admin.html"))
    })
}