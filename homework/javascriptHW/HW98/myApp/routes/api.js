var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/contacts', function (req, res, next) {
    res.send([
        {
            name: 'Joe',
            email: 'abc@123',
            phone: '123-456-7890'
        },
        {
            name: 'Sam',
            email: 'xyz@123',
            phone: '987-654-3210'
        },
        {
            name: 'Bob',
            email: 'lmno@123',
            phone: '951-753-4569'
        }
    ]);
});

module.exports = router;
