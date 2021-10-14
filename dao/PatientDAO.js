const db = require("../util/database");
const { firebase, admin } = require("../auth/firebaseConfig");
const surveyHelper = require("../helpers/SurveyHelper");

  exports.createUser = (request) => {
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
        const promise2 = db.runQuery(
          `INSERT INTO public.questionary(
          idpatient, databadania, education, profession, mainproblems, hypertension, insulinresistance, diabetes, hypothyroidism, intestinaldiseases, otherdiseases, 
          medications, supplementstaken, avgsleep, usuallywakeup, usuallygotosleep, doesexercise, regularwalk, averagesporttime, sporttypes, exercisingperweek, 
          waterglasses, coffeeglasses, teaglasses, juiceglasses, energydrinkglasses, drinkalchohol, alcoholhowoften, alchoholbeverages, smoke, cigs, mealseat,
          breakfast, secondbreakfast, lunch, afternoonmeal, dinner, favfooditems, notfavfooditems, foodhypersensitivity, hypersensitivityproducts, alergie, alergieproducts, 
          gobetweenmeals, betweenmealsfood)
          VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, 
          $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, 
          $30, $31, $32, $33, $34, $35, $36, $37, $38, $39, $40, $41, 
          $42, $43, $44, $45);`,
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
            request.supplementstaken,
            request.avgsleep,
            request.usuallywakeup,
            request.usuallytogosleep,
            request.doesexercise,
            request.regularwalk,
            request.averagesporttime,
            request.sporttypes,
            request.exercisingperweek,
            request.waterglasses,
            request.coffeeglasses,
            request.teaglasses,
            request.juiceglasses,
            request.energydrinkglasses,
            request.drinkalchohol,
            request.alcholhowoften,
            request.alchoholbeverages,
            request.smoke,
            request.cigs,
            request.mealseat,
            request.breakfast,
            request.secondbreakfast,
            request.lunch,
            request.afternoonmeal,
            request.dinner,
            request.favfooditems,
            request.notfavfooditems,
            request.foodhypersensitivity,
            request.hypersensitivityproducts,
            request.alergie,
            request.alergieproducts,
            request.gobetweenmeals,
            request.betweenmealsfood,
          ]
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };
