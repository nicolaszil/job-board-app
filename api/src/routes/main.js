const express = require('express')
const router = new express.Router()

router.get('/', (req, res) => {
  res.render('main', {
    layout: 'index',
    title: "My App",
    user: { firstName: "Nicolas", lastName: "Zilberschlag" },
    navItems: ["Home", "Products", "Contact", "About us"],
    helpers: {
      formatIndex: (index) => index + 1,
      capitalize: (value) => value ? value.toUpperCase() : value,
    }
  });
})

module.exports = router