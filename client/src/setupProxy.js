const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(proxy('/newReleases/*', { target: 'http://localhost:8080/' }));
}