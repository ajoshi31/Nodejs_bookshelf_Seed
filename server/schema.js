var Schema = {
    table_name: {
        user_id: {type: 'increments', nullable: false, primary: true},
        email_id: {type: 'string', maxlength: 254, nullable: false, unique: true},
        contact_number: {type: 'integer', size: 255  }
    }
}

module.exports = Schema;