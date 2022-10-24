const express = require('express')
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser')
const {randomBytes} = require('crypto')
const port = 4001;
const host = 'http://localhost'
const posts = {}

/* APP USE
========================= */
app.use(cors())
app.use(bodyParser.json())
/* APP GET
========================= */
/* APP POST
========================= */
/* APP LISTEN
========================= */
app.listen(port, () => {
    console.log(`This comments-app is listening at ${host}:${port}`)
})
