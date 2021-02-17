var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/contacts', function (req, res, next) {
    db.query('SELECT * FROM contacts', (error, results, fields) => {
        if (error) {
            return next(`Unable to fetch contacts ${error.message}`);
        }

        // debug(`get returning ${JSON.stringify(results)}`);
        res.send(results);
    });
});

router.post('/addContact', function (req, res, next) {
    db.query('INSERT INTO contacts(Id, firstName, lastName, email, phone) VALUES (?, ?, ?, ?)',
        [req.body.Id, req.body.firstName, req.body.lastName, req.body.email, req.body.phone],
        (error, results, fields) => {
            if (error) {
                return next(new Error(`Unable to insert contact - ${error.message}`));
            }
            res.statusCode = 201;
            res.send(req.body);
        });
});

module.exports = router;
