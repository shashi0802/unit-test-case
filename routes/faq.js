var express = require('express')
var router = express.Router()
var Stack = require('../models/contentstack')


router.get('/faq', function (req, res) {
    var contentTypeUID = "faq"

    Stack.ContentType(contentTypeUID).Query()
        .toJSON()
        .find()
        .spread(function success(result) {
            res.render('faq.html', {
                entry: result[0],
            })
        }, function error(error) {
            next(error)
        })
})

module.exports = router