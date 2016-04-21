var osprey = require('osprey');
var router = osprey.Router();

router.get('/token', function(req, res) {
    res.json({"token": "1234556"});
});

module.exports = router;

