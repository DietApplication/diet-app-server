import runQuery from "../../util/database.js";

export default {
  /**
   * Creates a new user account associated with the specified email address and password.
   */
  checkEmail: (email) => {
    return runQuery(`select email from public."Users" where email = $1`, [
      email,
    ]).then((data) => {
      if (!data[0]) return true;
      else throw "User exists";
    });
  },

  //Date.now format => dd-mm-yyyy
  getCurrentDate: () => {
    new Date().toLocaleDateString().replaceAll("/", "-");
  },
};
