const express = require('express')
const routes = require('./routes')

const app = express()

app.use(routes)

const port = 7777
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})
