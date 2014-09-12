(function() {
"use strict";
var router = require('crossroads');
var home = require('./app/home/main');
var about = require('./app/about/main');
var contact = require('./app/contact/main');

   
router.addRoute('/', home);
router.addRoute('/home/about', about);
router.addRoute('/home/contact', contact);

var currentPath = document.location.pathname + document.location.search;
router.parse(currentPath);
})();