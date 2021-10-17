import {
  checkTempUserEmail,
  createUserFromSurvey,
} from "../services/signUpService.js";

/**
 * Validates user email and uniquekey before accessing the survey
 * @returns Response with Code 200 in case user was found in database
 * @returns Response with Code 403 in case request user was not found
 */
export const validateEmail = (req, res, next) => {
  checkTempUserEmail(req)
    .then((data) => {
      if (data[0]) {
        return res.status(200).json({
          message: "User verified succesfully",
        });
      } else {
        return res.status(403).json({
          message: "No user was found",
        });
      }
    })
    .catch((err) => {
      next(err);
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
export const createUser = (req, res, next) => {};
