import express from 'express'
import session from 'express-session'

const app = express()

app.use(session({
  secret: 'shhhhhhhhhhhhhhhhhhhhh',
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 1000000
  }
}))

// 
app.get('/login', (req, res) => {
  const { username } = req.query
  req.session.user = username
  req.session.admin = true
  res.send('Bienvenido!' + `${username}`)
})

app.get('/privado', auth, (req, res) => {
  console.log(req.session)
  res.send('si estas viendo esto es porque ya te logueaste!')
})

app.get('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      res.json({ status: 'Logout ERROR', body: err })
    } else {
      res.send('Logout ok!')
    }
  })
})

const PORT = 8080
app.listen(PORT, () => {
  console.log(`Servidor express escuchando en el puerto ${PORT}`)})