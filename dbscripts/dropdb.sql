-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2021-10-10 21:59:23.178

-- foreign keys
ALTER TABLE Day
    DROP CONSTRAINT Day_Diet;

ALTER TABLE Diet
    DROP CONSTRAINT Diet_Patient;

ALTER TABLE DietSuppliment
    DROP CONSTRAINT Diet_Suppliment_Diet;

ALTER TABLE DietSuppliment
    DROP CONSTRAINT Diet_Suppliment_Suppliment;

ALTER TABLE Disease_Patient
    DROP CONSTRAINT Disease_Patient_Diseases;

ALTER TABLE Disease_Patient
    DROP CONSTRAINT Disease_Patient_Patient;

ALTER TABLE FoodInput
    DROP CONSTRAINT FoodInput_Patient;

ALTER TABLE FoodInput
    DROP CONSTRAINT FoodInput_Products;

ALTER TABLE IndividualRecipe
    DROP CONSTRAINT IndividualRecipe_MealTake;

ALTER TABLE MealTake
    DROP CONSTRAINT MealTake_Day;

ALTER TABLE MealsBeforeDiet
    DROP CONSTRAINT MealsEat_PendingUser;

ALTER TABLE Measurements
    DROP CONSTRAINT Measurements_Patient;

ALTER TABLE Note
    DROP CONSTRAINT Note_Doctor;

ALTER TABLE Note
    DROP CONSTRAINT Note_Patient;

ALTER TABLE Patient
    DROP CONSTRAINT Patient_User;

ALTER TABLE Product_Parameter
    DROP CONSTRAINT Product_Parameter_Parameter;

ALTER TABLE Product_Parameter
    DROP CONSTRAINT Product_Parameter_Products;

ALTER TABLE Questionary
    DROP CONSTRAINT Questionary_Patient;

ALTER TABLE Recipe
    DROP CONSTRAINT Recipe_Meals;

ALTER TABLE Recipe
    DROP CONSTRAINT Recipe_Products;

ALTER TABLE RecommendedMeal
    DROP CONSTRAINT RecommendedMeal_Diseases;

ALTER TABLE RecommendedMeal
    DROP CONSTRAINT RecommendedMeal_Meal;

ALTER TABLE ProductDiet
    DROP CONSTRAINT Table_16_Diet;

ALTER TABLE ProductDiet
    DROP CONSTRAINT Table_16_Products;

ALTER TABLE Doctor
    DROP CONSTRAINT Table_8_User;

ALTER TABLE Visit
    DROP CONSTRAINT Visit_Doctor;

ALTER TABLE Visit
    DROP CONSTRAINT Visit_Patient;

ALTER TABLE IndividualRecipe
    DROP CONSTRAINT indvidualRecipe_Recipe;

-- tables
DROP TABLE Day;

DROP TABLE Diet;

DROP TABLE DietSuppliment;

DROP TABLE Disease_Patient;

DROP TABLE Diseases;

DROP TABLE Doctor;

DROP TABLE FoodInput;

DROP TABLE IndividualRecipe;

DROP TABLE Meal;

DROP TABLE MealTake;

DROP TABLE MealsBeforeDiet;

DROP TABLE Measurements;

DROP TABLE Note;

DROP TABLE Parameter;

DROP TABLE Patient;

DROP TABLE Product;

DROP TABLE ProductDiet;

DROP TABLE Product_Parameter;

DROP TABLE Questionary;

DROP TABLE Recipe;

DROP TABLE RecommendedMeal;

DROP TABLE Supplement;

DROP TABLE Temp_User;

DROP TABLE public."Users";

DROP TABLE Visit;

-- End of file.

