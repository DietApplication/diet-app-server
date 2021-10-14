const Pool = require("pg").Pool;
const config = require("../config/config");

const pool = new Pool(config.elephantDb);

pool.on("connect", () => {
  console.log("Connecting...");
});

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

exports.runQuery = runQuery;
