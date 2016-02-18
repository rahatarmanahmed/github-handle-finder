'use strict';
const got = require('got')
const split = require('split')
const through2 = require('through2')

const API_KEY = process.env.API_KEY

const checkUser = (user) => {
    return got(`https://api.github.com/users/${user}` + ((API_KEY) ? `?access_token=${API_KEY}` : ''))
    .then(res => false)
    .catch(err => err.statusCode === 404)
}

process.stdin
.pipe(split())
.pipe(through2((chunk, enc, cb) => {
    const user = chunk.toString()
    if(!user) return cb()

    checkUser(user)
    .then((exists) => {
        if (exists) console.log(user)
        cb()
    })
}))
