const db = require("../util/database");

/*
{
    "email": ...,
    "uniquekey": ....
}
*/
exports.validateEmail = (req, res, next) => {
  db.runQuery(
    `SELECT * FROM public."Temp WHERE email = $1 and uniquekey = $2`,
    [req.body.email, req.body.uniquekey]
  ).then((data) => {
    if (data) {
      res.status(200);
    } else {
      res.status(403); 
    }
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
exports.createUser = (req,res,next) => {
    
}
