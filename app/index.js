const express = require('express')
let prom = require('prom-client')
const register = prom.register;
let app = express();

app.use(express.static("."));

const counter = new prom.Counter({
    name: 'aula_request_total',
    help: 'Contador de requests',
    labelNames: ['statusCode']
});

const gauge = new prom.Gauge({
    name: 'aula_free_bytes',
    help: 'Exemplo de gauge'
});

const histogram = new prom.Histogram({
    name: 'aula_request_time_seconds',
    help: 'Tempo de resposta da API',
    buckets: [0.1, 0.2, 0.3, 0.4, 0.5]
});

const summary = new prom.Summary({
    name: 'aula_summary_request_time_seconds',
    help: 'Tempo de resposta da API',
    percentiles: [0.5, 0.9, 0.99]
});

app.get("/", (req, res) => {
    counter.labels('200').inc();
    counter.labels('300').inc();
    gauge.set(100 * Math.random());
    const tempo = Math.random();
    histogram.observe(tempo);
    summary.observe(tempo);

    res.sendFile(__dirname + '/index.html')
});

app.get('/metrics', function (req, res) {
    res.set('Content-Type', register.contentType);
    res.end(register.metrics());
});

app.listen("3001", () => {
    console.log("Server is listening on port 3030")
});