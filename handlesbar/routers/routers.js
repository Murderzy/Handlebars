import Router from "express";
import path from "path";
import fs from "fs";
const __dirname = path.resolve();
const router = Router();

router
  .route("/")
  .get((req, res) => {
    res.render("index.hbs");
  })


router
  .route("/news")
  .get((req, res) => {
    res.render("news.hbs");
  });

router
  .route("/about")
  .get((req, res) => {
    res.render("about.hbs");
  });
 
  router
  .route("/login")
  .get((req, res) => {
    res.render("log.hbs");
  })
  .post( function (request, response) {
    if(!request.body) return response.sendStatus(400);
    console.log(request.body);
    fs.writeFileSync("log.txt","Login: "+ request.body.userLogin + " Password: " + request.body.userPass);
    response.send(`${request.body.userLogin} `);
});

  router
  .route("/reg")
  .get((req, res) => {
    res.render("reg.hbs");
  })
  .post( function (request, response) {
    if(!request.body) return response.sendStatus(400);
    console.log(request.body);
    fs.writeFileSync("reg.txt","Login: "+ request.body.userLogin + " Password: " + request.body.userPass + " Email: "+ request.body.userEmail);
    response.send(`${request.body.userLogin} `);
});

export default router;
