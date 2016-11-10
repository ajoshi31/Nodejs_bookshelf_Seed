var config = {
    production: {
        database: {
            HOST: 'prod_url',
            PORT: '8889',
            USER: 'username',
            PASSWORD: 'password',
            DATABASE: 'myapp'
        },
        backend: {
            URL: '',
            PORT: '3001'
        }
    },
    development: {
        database: {
            HOST: 'localhost',
            PORT: '8889',
            USER: 'username',
            PASSWORD: 'password',
            DATABASE: 'myapp'
        },
        backend: {
            URL: 'localhost',
            PORT: '3000'
        }
    },
    staging: {
        database: {
            HOST: 'stage_url',
            PORT: '8889',
            USER: 'username',
            PASSWORD: 'password',
            DATABASE: 'myapp'
        },
        backend: {
            URL: '',
            PORT: '3002'
        }
    }
};
if (process.env.NODE_ENV == 'production') {
    module.exports.config = config.production
}
else if (process.env.NODE_ENV == 'development') {
    module.exports.config = config.development;
}
else if (process.env.NODE_ENV == 'staging') {
    module.exports.config = config.staging;
}
else {
    console.log('Proper node enviornment not set');
}