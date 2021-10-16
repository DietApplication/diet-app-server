// const db = require("../src/util/database");

/* const request = {
  gender: "MALE",
  city: "WARSZAWA",
  street: "Garazowa",
  streetnumber: "12",
  flatnumber: "47",
};
db.runQuery(
  `insert into public."patient"(iduser, ispending, sex, city, street, streetnumber, flatnumber, PAL) values ($1, $2, $3, $4, $5, $6, $7, $8)`,
  [
    "2",
    "TRUE",
    request.gender,
    request.city,
    request.street,
    request.streetnumber,
    request.flatnumber,
    null,
  ]
).catch(err => console.log(err));
*/

console.log(new Date().toLocaleDateString().replaceAll("/",'-'));