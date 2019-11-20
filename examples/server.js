/*
 * @Author: your name
 * @Date: 2019-11-20 23:45:56
 * @LastEditTime: 2019-11-20 23:49:41
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \ts-axios\examples\server.js
 */
const express = require('express')
const bodyParser = require('body-parser')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const WebpackConfig = require('./webpack.config')

const app = express()
const compiler = webpack(WebpackConfig)
const router = express.Router()

router.get('/simple/get', function (req, res) {
    res.json({
        msg: `hello world`
    })
})

app.use(webpackDevMiddleware(compiler, {
    publicPath: '/__build__/',
    stats: {
        colors: true,
        chunks: false
    }
}))

app.use(webpackHotMiddleware(compiler))

app.use(express.static(__dirname))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(router)


const port = process.env.PORT || 8081
module.exports = app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}, Ctrl+C to stop`)
})