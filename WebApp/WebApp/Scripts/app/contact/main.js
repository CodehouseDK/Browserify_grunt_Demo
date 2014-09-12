var $ = require('jquery');

module.exports = function () {
    var jumbotron = $('#imhere');
    jumbotron.text('please contact us');
    jumbotron.removeClass('hidden');
};