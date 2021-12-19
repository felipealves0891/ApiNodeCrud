const express = require('express')
const router = express.Router()

router.get('/', async function (req, res, next) {
    res.status(200).send({
        title: "Node Express API",
        version: "0.0.1"
    })
})

module.exports = router