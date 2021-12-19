'use strict'

const app = require('../src/app');
const cors = require("cors")
const corsOptions = {
    origin: "http://localhost:30008"
}

app.use(cors(corsOptions));

const port = '30008'
app.listen(port, function () {
    console.log(`app listening on port ${port}`)
})