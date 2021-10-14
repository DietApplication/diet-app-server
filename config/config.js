module.exports = {
  elephantDb: {
    user: "mdzcojxm",
    password: "Ko_V9TI2V1PH2XI3DC1VYYt2pBTqRopP",
    host: "tai.db.elephantsql.com",
    port: 5432,
    database: "mdzcojxm",
  },
  swaggerOptions: {
    swaggerDefinition: {
      info: {
        title: 'Diet application API',
        descriotion: 'API for Diet Application Thesis in PJAIT',
        contact: {
          name: "Dmytro Borovych",
          studentNumber: "s18963"
        },
        servers: ['http://localhost:5000']
      }
    },
    apis: ['../routes/*.js']
  }
};
