
var sext = require('sext')
,config = require('./config.json')

try {
  sext(config,require('./config.local.json'));
} catch(e){}

module.exports = config;
