var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('layout', {
        title: 'Express',    
        contacts:[
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
        ],
        partials: { content: 'contacts' }
    });
});

module.exports = router;
