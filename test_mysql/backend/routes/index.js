const express = require('express');
const router = express.Router();
const port = 3000;
const database = require("./database");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/api/weather", (req, res) => {
  database.query("SELECT * FROM weather_test.weather_data", (err, data) => {
    if (!err) {
      res.send({ data });
    } else {
      console.log(err);
    }
  })
});

/*router.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});*/
module.exports = router;
