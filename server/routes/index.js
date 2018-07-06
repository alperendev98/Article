// server/routes/index.js
const user = require('./user')
const article = require('./article')
module.exports = (router) => {
    user(router)
    article(router)
}