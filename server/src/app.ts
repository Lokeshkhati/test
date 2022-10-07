import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.send('Hello form ts app')
})

const PORT = 4000

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})