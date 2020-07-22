const express = require('express')
let prom = require('prom-client')
const register = prom.register;
let app = express();

app.use(express.static("."));

const counter = new prom.Counter({
    name: 'status_request_total',
    help: 'Contador de requests',
    labelNames: ['statusCode']
});

app.get("/", (req, res) => {
    counter.labels('200').inc();

    res.sendFile(__dirname + '/index.html')
});

app.get('/metrics', function (req, res) {
    res.set('Content-Type', register.contentType);
    res.end(register.metrics());
});

app.listen("3030", () => {
    console.log("Server is listening on port 3030")
});