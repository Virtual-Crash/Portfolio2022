const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 3000

//view engine to show html and join pages
express()
  .use(express.static(path.join(__dirname, 'pages')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'pug')
  .get('/', (req, res) => res.render('\Home'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))