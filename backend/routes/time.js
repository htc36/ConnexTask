let express = require('express');
let router = express.Router();

/* GET time endpoint. */
router.get('/', function (req, res, next) {
  res.send({ epoch: new Date().getTime() });
});

module.exports = router;
