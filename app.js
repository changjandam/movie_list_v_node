const express = require('express')
const app = express()
const port = 3000
const movies = require('./movies.json')

const exphbs = require('express-handlebars')

app.engine('handlebars', exphbs({ defaultLatout: 'main' }))

app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index', { movie: movies.results })
})

app.get('/movies/:movie_id', (req, res) => {
 
  const movie = movies.results.filter(movie => movie.id == req.params.movie_id)

  res.render('show', { movie: movie[0] })

})
app.listen(port, () => {
  console.log(`Express is running on http://localhost:3000`)
})