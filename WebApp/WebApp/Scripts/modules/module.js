var $ = require('jquery');
var jQuery = $;
module.exports = function (message) {
    var jumbotron = $('#imhere');
    jumbotron.text(message);
    jumbotron.removeClass('hidden');

};