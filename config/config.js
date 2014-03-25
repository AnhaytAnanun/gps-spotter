module.exports = {
    dev: {
        db: 'mongodb://localhost/gps-spotter',
        host: 'http://localhost:3000'
    },

    // testing: {
    //     db: 'mongodb://localhost/tuning-testing',
    //     host: 'http://localhost:3000'
    // },

    //Heroku environments
    development: {
        db: 'mongodb://localhost/gps-spotter',
        host: 'http://gps-spotter.herokuapp.com'
    },
};