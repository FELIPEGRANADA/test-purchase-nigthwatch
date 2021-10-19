// Driver to connect to Chrome
const chromedriver = require('chromedriver');
const url = 'https://www.saucedemo.com/';

module.exports = {
    // Before execute the test cases
    before: function (done) {
        chromedriver.start();
        done();
    },

    // After execute the test cases
    after: function (done) {
        chromedriver.stop();
        done();
    },

    // Get url of the page
    getUrl: function() {
        return url;
    },

    reporter : function(results, done) {
        console.log(results);
        done();
      }
};