const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req, res) => {
  res.sendStatus(403)
})

app.get('/meunumero', (req, res) => {

  console.log(typeof(req.query.numero))
  if(req.query.numero === undefined) res.sendStatus(400)
  res.status(200)
  res.send(`Voce digitou o numero ${req.query.numero}`)
})

app.get('/minhafrase', (req, res) => {
  res.send(`Digite uma frase`)
})

app.get('/minhafrase/:frase', (req, res) => {
  res.send(`A sua frase eh ${req.params.frase}`)
})


app.get('/meuheader', (req, res) => {

  res.status(202)
  res.send(`Header: ${req.headers.origin}`)
})

app.get('/*', (req, res) => {
  res.sendStatus(503)
})


app.listen(port, () => {
  console.log(`Servidor ouvindo na porta http://localhost:${port}`)
})