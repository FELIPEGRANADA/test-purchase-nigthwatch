module.exports = {
    // Test case to login without username
    'Login username required test': function (browser) {
        let saucedemo = browser.page.login();
        saucedemo
            // Execute the command to open the page
            .openpage('Swag Labs')
            // Execute the command to login in the page
            .filllogin('', '')
            // Execute the command to verify the error message
            .validatererror('Username')           
    },

    // Test case to login without password
    'Login password required test': function (browser) {
        let saucedemo = browser.page.login();
        saucedemo
            // Execute the commando to clear fields
            .clearfields()
            // Execute the command to login in the page
            .filllogin('standard_user', '')
            // Execute the command to verify the error message
            .validatererror('Password')           
    },

    // Test case to login with locked user
    'Login locked user test': function (browser) {
        let saucedemo = browser.page.login();
        saucedemo
            // Execute the commando to clear fields
            .clearfields()
            // Execute the command to login in the page
            .filllogin('locked_out_user', 'secret_sauce')
            // Execute the command to verify the error message
            .validatererror('locked out')           
    },

    // Test case to login with invalid credentials
    'Login invalid credentials test': function (browser) {
        let saucedemo = browser.page.login();
        saucedemo
            // Execute the commando to clear fields
            .clearfields()
            // Execute the command to login in the page
            .filllogin('user_credential', 'secret_sauce')
            // Execute the command to verify the error message
            .validatererror('do not match')           
    },

    // Test case to open without credentials
    'Login open without credentials test': function (browser) {
        let saucedemo1 = browser.page.inventory();
        saucedemo1
            // Execute command to open url inventory.html
            .navigate() 
        
        let saucedemo2 = browser.page.login();
        saucedemo2
            // Execute the command to verify the error message
            .validatererror('You can only access')         
    }
}