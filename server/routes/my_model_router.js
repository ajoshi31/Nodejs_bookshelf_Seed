var Model = require('./../models/MyModelName');

var express = require('express');
var router = express.Router();

/* GET all the  data listing. */
router.get('/', function (req, res, next) {
    Model.MTP_Content_Providers .forge()
        .fetch()
        .then(function (collection) {
            res.json({error: false, data: collection.toJSON()});
        })
        .catch(function (err) {
            res.status(500).json({error: true, data: {message: err.message}});
        });
});

/* POST a data listing. */
router.post('/', function (req, res, next) {
    Model.MTP_Content_Provider.forge(req.body)
        .save()
        .then(function (provider) {
            res.json({error: false, data: {id: provider.get('id')}});
        })
        .otherwise(function (err) {
            res.status(500).json({error: true, data: {message: err.message}});
        });
});

module.exports = router;