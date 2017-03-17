var botBuilder = require('claudia-bot-builder'),
    excuse = require('beergifs');

module.exports = botBuilder(function (request) {
  return 'Yes Bro it is the decent time to drink a beer ' + 
      excuse.get();
});
