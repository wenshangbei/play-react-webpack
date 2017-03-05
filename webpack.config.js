'use strict';

const path = require('path');
const args = require('minimist')(process.argv.slice(2));

// List of allowed environments
const allowedEnvs = ['dist'];

// Set the correct environment
let env='dev';

process.env.REACT_WEBPACK_ENV = env;

/**
 * Build the webpack configuration
 * @param  {String} wantedEnv The wanted environment
 * @return {Object} Webpack config
 */
function buildConfig(wantedEnv) {
 
  let config = require(path.join(__dirname, 'cfg/' + wantedEnv));
  return config;
}

module.exports = buildConfig(env);
