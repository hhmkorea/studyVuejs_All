const express = require('express');
const router = express.Router();
const port = 3000;

const weather = {
  weather: "맑음",
  curr_temp: 24,
  highest_temp: 25,
  lowest_temp: 19,
};
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/api/weather", (req, res) => {
  res.send(weather);
});

/*router.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});*/
module.exports = router;
