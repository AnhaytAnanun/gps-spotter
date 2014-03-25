module.exports = function(app) {
    app.get('/satellites', app.handlers.satellite.get);
    
    app.post('/satellites', app.handlers.satellite.add);
};