'use strict';

const http = require('http')
const url = require('url')
const map = require('through2-map')

const params = process.argv.slice(2)
const PORT = Number(params[0])
const URL_TIME = '/api/parsetime'
const URL_UNIXTIME = '/api/unixtime'

function getTime(d) {
  return {
    hour: d.getHours(),
    minute: d.getMinutes(),
    second: d.getSeconds(),
  }
}

function getUnixTime(d) {
  return {
    unixtime: d.getTime()
  }
}

http.createServer((req, res) => {
  const reqUrl = url.parse(req.url, true)
  const d = new Date(reqUrl.query.iso)


  if (reqUrl.pathname === URL_TIME) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(getTime(d)))
  }

  if (reqUrl.pathname === URL_UNIXTIME) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(getUnixTime(d)))
  }
})
.listen(PORT)
