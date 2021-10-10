const db = require("../util/database");

module.exports = {
  checkEmail: (email) => {
    return db
      .runQuery(`select email from public."Users" where email = $1`, [email])
      .then((data) => {
        if (!data[0]) return true;
        else throw "User exists";
      });
  },
  // TO-DO
  validateRequest: (request) => {},
  //Date.now format => dd-mm-yyyy
  getCurrentDate: () => {
    new Date().toLocaleDateString().replaceAll("/", "-"); 
  },
};
