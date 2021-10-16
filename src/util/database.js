import pkg from 'pg'
import config from '../config/config.js'

const {Pool} = pkg;
const pool = new Pool(config.elephantDb);

/**
 * Runs a query in Postgres database
 *
 * User account creation can fail if the account already exists or the password is invalid.
 * @param text - Query itself with parameters format $ + number of parameter (e.g $1, $2 etc)
 * @param values - Array of values in a query
 * @returns - Returns a promise with rows of data
 */
const runQuery = (text, values) => {
  return pool
    .query(text, values)
    .then((res) => {
      return res.rows;
    })
    .catch((err) => {
      console.log(err);
    });
};

export default runQuery;
