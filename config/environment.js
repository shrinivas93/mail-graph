const dotenv = require('dotenv');
const dotenvResult = dotenv.config();

const logger = require('debug')('environment');

module.exports = function() {
  if (dotenvResult.error) {
    logger('%s', dotenvResult.error.message);
    process.exit(1);
  }
  if (dotenvResult.parsed) {
    const properties = Object.keys(dotenvResult.parsed);
    logger('%O', dotenvResult.parsed);
  }
};
