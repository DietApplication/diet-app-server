const db = require("../../util/database");

exports.validateEmail = (req, res, next) => {
  db.runQuery(
    `SELECT * FROM public."temp_user" WHERE email = $1 and uniquekey = $2`,
    [req.body.email, req.body.uniquekey]
  )
    .then((data) => {
      if (data[0]) {
        res.status(200).json({
          message: "User verified succesfully",
        });
      } else {
        res.status(403).json({
          message: "No user was found",
        });
      }
    })
    .catch((err) => {
      next(error);
    });
};
/*
{
    "firstname": ... ,
    "lastname": ... ,
    "gender": ... ,
    "email": ... ,
    "password": ...,
    "phone": ... ,
    "dataofbirh" ... ,
    "pesel": ... ,
    "city": ... ,
    "street": ... ,
    "flat": ... ,
    "education": ... ,
    "weight": ... ,
    "height": ... ,
    "waistcircumference": ... ,
    "hipcircumfererence" ... ,
    "mainproblems": ... ,
    "hypertension": ... ,
    "insulinresistance": ... ,
    "diabetes": ... ,
    "hypothyroidism": ... ,
    "intestinaldiseases": ... ,
    "otherdiseases": ... ,
    "medications" : ... ,
    "avgsleep": ... ,
    "usuallywakeup": ... ,
    "usuallygotosleep": ... ,
    "averagesporttime": ... ,
    "exercisingperweek": ... ,
    "sporttypes": ... ,
    "waterglasses": ... ,
    "coffeeglasses": ... ,
    "teaglasses": ... ,
    "juiceglasses": ... ,
    "energydrinkglasses": ... ,
    "drinkalchohol": ... ,
    "alchoholhowoftern": ... ,
    "alchoholbeverages": ... ,
    "smoke": ... ,
    "cigs": ... ,
    "mealseat": ... ,
    "breakfast": ... ,
    "secondbreakfast": ... ,
    "lunch": ... ,
    "afternoonmeal": ... ,
    "dinner": ... ,
    "favfooditems": ... ,
    "notfavfooditems": ... ,
    "foodhypersensitivity": ... ,
    "hypersensitivityproducts": ... ,
    "alergie": ... ,
    "alergieproducts": ... ,
    "gobetweenmeals": ... ,
    "betweenmealsfood": ... ,
    "mealsbeforediet": [{mealnumber,hour,foodtoeat}]
}
*/
exports.createUser = (req, res, next) => {};
