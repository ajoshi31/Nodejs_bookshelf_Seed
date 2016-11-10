var configVar = require('./envconfig');
var DBConfig = {
    client: 'mysql',
    connection: {
        host: configVar.config.database.HOST,
        port: configVar.config.database.PORT,
        user: configVar.config.database.USER,
        password: configVar.config.database.PASSWORD,
        database: configVar.config.database.DATABASE,
        charset: 'utf8'
    }
};

var knex = require('knex')(DBConfig);
var bookshelf = require('bookshelf')(knex);

module.exports.bookshelf = bookshelf;