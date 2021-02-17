var express = require('express');
var router = express.Router();
let idCount = 1;

router.get('/', function (req, res, next) {
  db.query('SELECT * FROM contacts', (error, results, fields) => {
    if (error) {
      return next(`Unable to fetch contacts ${error.message}`);
    }
    res.render('layout', {
      title: 'Contacts',
      contacts: results,
      noContacts: !results.length,
      partials: { content: 'contacts' }
    });
  });
});

router.post('/addContact', function (req, res, next) {
  db.query('INSERT INTO contacts(firstName, lastName, email, phone) VALUES (?, ?, ?, ?)',
    [req.body.firstName, req.body.lastName, req.body.email, req.body.phone],
    (error, results, fields) => {
      if (error) {
        return next(new Error(`Unable to insert contact - ${error.message}`));
      }
      res.redirect('/contacts');
    });
});

router.get('/addContact', function (req, res, next) {
  res.render('layout', {
    title: 'Add Contact',
    partials: { content: 'addContact' }
  });
});

// router.post('/addContact', function (req, res, next) {
//   //console.log(req.body);
//   req.body.id = idCount++;
//   contacts.push(req.body);
//   res.redirect('/contacts');
// });

router.get('/editContact/:Id', function (req, res, next) {
//   let contact = contacts.find(c => c.id === +req.params.id);
//   res.render('layout', {
//     contact,
//     title: 'Edit Contact',
//     partials: { content: 'editContact' }
//   });
// });
  db.query('SELECT * FROM contacts WHERE Id = ? LIMIT 1 ',
    [req.params.Id],
    (error, results, fields) => {
      
      if (error) {
        return next(new Error(`Unable to update contact ${req.params.Id} ${error.message}`));
      }

      if (!results.length) {
        return next(new Error(`Unable to update contact ${req.params.Id} - not found`));
      }

      res.render('layout', {
        title: 'Edit Contact',
        contact: results[0],
        partials: { content: 'contact' }
      });
    });
});
router.post('/editContact/:id', function (req, res, next) {
//   const contact = contacts.find(c => c.id === +req.params.id);
//   if (!contact) {
//     return next(new Error(`No such contact ${req.params.id} found`));
//   }
//   Object.assign(contact, req.body);
//   res.redirect('/contacts');
// });
  db.query('UPDATE contacts SET firstName = ?, lastName = ?, email = ? , phone = ? WHERE id = ?',
    [req.body.firstName, req.body.lastName, req.body.email, req.body.phone, req.params.id],
    (error, results, fields) => {
      debug(results);

      if (error) {
        return next(new Error(`Unable to update contact - ${error.message}`));
      }

      if (!results.affectedRows) {
        return next(new Error(`Unable to update contact ${req.params.id} - not found`));
      }

      res.redirect('/contacts');
    });
});

router.get('/deleteContact/:Id', function (req, res, next) {
  db.query('DELETE FROM contacts WHERE Id = ?', [req.params.Id],
    (error, results, fields) => {
      if (error) {
        return next(new Error(`Unable to delete contact ${req.params.Id} - ${error.message}`));
      }
      if (!results.affectedRows) {
        return next(new Error(`Unable to delete contact ${req.params.Id} - not found`));
      }
      res.redirect('/contacts');
    });
});

module.exports = router;
