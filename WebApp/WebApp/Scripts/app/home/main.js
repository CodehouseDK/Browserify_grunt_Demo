﻿var $ = require('jquery');

module.exports = function () {
    var jumbotron = $('#imhere');
    jumbotron.text('You are home');
    jumbotron.removeClass('hidden');
};