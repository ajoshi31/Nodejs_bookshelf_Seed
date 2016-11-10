var Bookshelf = require('../../config/db').bookshelf;

// Provider model
var MyModelName =  Bookshelf.Model.extend({
    tableName: 'table_name'
});
var MyModelNames = Bookshelf.Collection.extend({
    model: MyModelName
});

module.exports = {
    MTP_Content_Provider: MyModelName,
    MTP_Content_Providers: MyModelNames
};
