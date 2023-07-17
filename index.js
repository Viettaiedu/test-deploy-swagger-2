const express = require("express");
const app = express();
// const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('./swagger.json');
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");
// const pathToSwaggerUi = require("swagger-ui-dist").absolutePath();
// app.use(express.static(pathToSwaggerUi));
// var SwaggerUIBundle = require("swagger-ui-dist").SwaggerUIBundle;
// app.use(express.static(__dirname));
// app.use("*.css", (req, res, next) => {
//   res.set("Content-Type", "text/css");
//   next();
// });
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "TEST API",
    },
  },
  schemes: ["https"],
  host: "https://test-deploy-swagger-o4rx.vercel.app/",
  apis: ["index.js"],
};
const spec = swaggerJsDoc(options);
app.use(
  "/api-docs",
  swaggerUI.serve,
  swaggerUI.setup(spec, {
    customCssUrl: [
      "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.1.1/swagger-ui.css",
    
    ],
  })
);

app.use("/home", (req, res) => {
  res.send("Home");
});
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.listen(3000, () => {
  console.log("listening on port 3000");
});
