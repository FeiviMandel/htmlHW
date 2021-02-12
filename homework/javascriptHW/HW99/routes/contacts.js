var express = require('express');
var router = express.Router();
let idCount = 1;
let contacts = [
  {
    id:idCount++,
    firstName: 'Joe',
    lastName: 'Biden',
    phone: '1234567890',
    email: 'jbiden@whitehouse.gov'
  },
  {
    id: idCount++,
    firstName: 'Kamala',
    lastName: 'Harris',
    phone: '9876543210',
    email: 'kharris@whitehouse.gov'
  }
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('layout', {
    title: 'Contacts',
    contacts,
    noContacts: !contacts.length,
    // css: ['contacts'],
    partials: { content: 'contacts' }
  });
});

router.get('/addContact', function (req, res, next) {
  res.render('layout', {
    title: 'Add Contact',
    partials: { content: 'addContact' }
  });
});

router.post('/addContact', function (req, res, next) {
  //console.log(req.body);
  req.body.id = idCount++;
  contacts.push(req.body);
  res.redirect('/contacts');
});
router.get('/editContact/:id', function (req, res, next) {
  let contact = contacts.find(c => c.id === +req.params.id);
  res.render('layout', {
    contact,
    title: 'Edit Contact',
    partials: { content: 'editContact' }
  });
});

router.post('/editContact/:id', function (req, res, next) {
  console.log(req.body);
  // req.body.firstName = idCount++;
  // req.body.lastName = idCount++;
  // contacts = contacts.filter(c => c.id !== +req.params.id);
  // contacts.push(req.body);
  
  req.body.id = +req.params.id;
  contacts[+req.params.id] = req.body;
  // req.body.firstName = req.params.firstName;
  // req.body.lastName = req.params.lastName;
  // req.body.email = req.params.email;
  // req.body.phone = req.params.phone;
  res.redirect('/contacts');
});

router.get('/deleteContact/:id', function (req, res, next) {
  contacts = contacts.filter(c => c.id !== +req.params.id);
  res.redirect('/contacts');
});

module.exports = router;
