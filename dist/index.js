"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = exports.app = void 0;
var express_1 = __importDefault(require("express"));
var http_1 = __importDefault(require("http"));
var database_1 = require("./database");
// import bookRoute from "./routes/book"
var battery_1 = __importDefault(require("./routes/battery"));
var app = (0, express_1.default)();
exports.app = app;
var server = http_1.default.createServer(app);
exports.server = server;
var port = 3000;
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
(0, database_1.connectToDatabase)();
app.get("/healthcheck", function (_, res) {
    res.json({ message: "OK", status: 200 });
});
// app.use("/api", bookRoute)
app.use("/api", battery_1.default);
app.use(function (error, req, res, next) {
    var status = error.statusCode || 500;
    var message = error.message || "Internal Server Error";
    if (req.accepts("json")) {
        res.status(status).json({ message: message });
    }
    else {
        res.status(status).send("<pre>".concat(message, "</pre>"));
    }
});
server.listen(port, function () {
    console.log("Server is running on port ".concat(port));
});
