const db = require("../util/database");
const { firebase, admin } = require("../auth/firebaseConfig");
const surveyHelper = require("../Helpers/SurveyHelper");

module.exports = {
  createUser: (request) => {
    let userId;

    surveyHelper
      .checkEmail(request.email)
      .then(() => {
        return firebase
          .auth()
          .createUserWithEmailAndPassword(request.email, request.password);
      })
      .then(() => {
        //INSERT USER
        return db.runQuery(
          `insert into public."Users"(firstname,lastname, dateofbirth,email,phonenumber,role) values ($1,$2,TO_DATE($3,'DD-MM-YYYY'),$4,$5,$6) RETURNING iduser`,
          [
            request.firstname,
            request.lastname,
            request.dateofbirth,
            request.phonenumber,
            "PATIENT",
          ]
        );
      })
      .then((result) => {
        userId = result[0].userid;
        //INSERT INTO PATIENT
        return db.runQuery(
          `insert into public."Patient"(ispending, sex, city, street, streetnumber, flatnumber, PAL) values ($1, $2, $3, $4, $5, $6, $7, $8)`,
          [
            userId,
            "TRUE",
            request.gender,
            request.city,
            request.street,
            request.streetnumber,
            request.flatnumber,
            null,
          ]
        );
      })
      .then(() => {
        //INSERT INTO MEASUREMENTS
        const promise1 = db.runQuery(
          `insert into public."measurements"(idpatient,height,weight,date,hipcircumference,waistcircumference) values ($1, $2, $3, TO_DATE($4,'DD-MM-YYYY), $5, $6)`,
          [
            userId,
            request.height,
            request.weight,
            surveyHelper.getCurrentDate(),
            request.hipcircumference,
            request.waistcircumference,
          ]
        );
        //INSERT INTO QUESTIONARY
        //TO-DO
        const promise2 = db.runQuery(`INSERT INTO public.questionary(
          idpatient, databadania, education, profession, mainproblems, hypertension, insulinresistance, diabetes, hypothyroidism, intestinaldiseases, otherdiseases, medications, supplementstaken, avgsleep, usuallywakeup, usuallygotosleep, doesexercise, regularwalk, averagesporttime, sporttypes, exercisingperweek, waterglasses, coffeeglasses, teaglasses, juiceglasses, energydrinkglasses, drinkalchohol, alcoholhowoften, alchoholbeverages, smoke, cigs, mealseat, breakfast, secondbreakfast, lunch, afternoonmeal, dinner, favfooditems, notfavfooditems, foodhypersensitivity, hypersensitivityproducts, alergie, alergieproducts, gobetweenmeals, betweenmealsfood)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`,
          [
            userId,
            surveyHelper.getCurrentDate(),
            request.education,
            request.profession,
            request.mainproblems,
            request.hypertension,
            request.insulinresistance,
            request.diabetes,
            request.hypothyroidism,
            request.instestinaldiseases,
            request.otherdiseases,
            request.medications,
            request.avgsleep,
            request,
          ]);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
