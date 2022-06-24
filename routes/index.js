var express = require('express');
var router = express.Router();
var rn = require('random-number');

const calculate = () => {
  const options = {
    min: 1000000,
    max: 1000000000000,
    integer: true,
  };
  rn(options);
  return rn(options) * rn(options);
};

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express', result: calculate() });
});

module.exports = router;
