var buildType = process.env.NODE_ENV || 'remotedev';

module.exports = require('./config/webpack.' + buildType + '.js');
