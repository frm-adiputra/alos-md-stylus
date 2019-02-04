const express = require('express')
const stylus = require('stylus')

const app = express()
const port = 8080

app.set('views', __dirname + '/views')
app.set('view engine', 'pug')

app.use(stylus.middleware({
	src: __dirname + '/../src',
	dest: __dirname + '/../dist'
}))

app.get('/', function (req, res) {
	res.render('index', { title: 'Hey', message: 'Hello there!' })
})

app.use(express.static('dist'))

app.listen(port, () => console.log(`Listening on port http://localhost:${port}`))
