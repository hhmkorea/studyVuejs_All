var express = require('express');
const app = express();
const port = 3000;
const database = require("./database");

app.get("/api/weather", (req, res) => {
  database.query("SELECT * FROM weather_test.weather_data", (err, data) => {
    if (!err) {
      res.send({data});
    } else {
      console.log(err);
    }
  });
  res.send(weather);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

/*
var router = express.Router();

/!* GET home page. *!/
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
*/