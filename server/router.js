var data_provider = require('./routes/my_model_router');

module.exports = function (app) {
    app.use('/your_uri', data_provider);
}
