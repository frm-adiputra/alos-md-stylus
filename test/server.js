const express = require('express')
const stylus = require('stylus')
const nib = require('nib')

const app = express()
const port = 8080

app.set('views', __dirname + '/views')
app.set('view engine', 'pug')

app.use(stylus.middleware({
	src: __dirname + '/../src',
	dest: __dirname + '/../test-dist',
	compile: (str, path) => {
		return stylus(str)
			.set('filename', path)
			.set('compress', false)
			.use(nib())
	}
}))

app.get('/', function (req, res) { res.render('index') })
app.get('/typography.html', function (req, res) { res.render('typography') })
app.get('/font-metrics.html', function (req, res) { res.render('font-metrics') })

app.use(express.static(__dirname + '/../test-dist'))
app.use(express.static(__dirname + '/static'))

app.listen(port, () => console.log(`Listening on port http://localhost:${port}`))
