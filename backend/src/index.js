const express = require('express')
const routes = require('./routes')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

mongoose.connect('mongodb+srv://plactom:mdOxj7b53lC5yG7j@cluster0-ntqzv.mongodb.net/ControleFinanceiro?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(cors())
app.use(express.json())
app.use(routes)

const port = 7777
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})
