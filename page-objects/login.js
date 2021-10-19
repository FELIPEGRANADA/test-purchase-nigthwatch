const globals = require("../globals")

var loginCommands = {
    openpage: function(pagename){
        return this
            // Initialize the navigation to URL
            .navigate()
            // Wait that the page is loaded
            .waitForElementVisible('@body', 2000)
            // Validate the name of the page
            .assert.title(pagename)
            
    },
    filllogin: function(username, password){
        return this
            // Validate if exists the element Username
            .assert.visible('@username')
            // Write in the element Username
            .setValue('@username', username)
            // Validate if exists the element Password
            .assert.visible('@password')
            // Write in the element Password
            .setValue('@password', password)
            // Validate if exists the element Login Button
            .assert.visible('@login_button')
            // Execute action click in the element Login Button
            .click('@login_button')
    },
    loginpage: function(newpage){
        return this
            // Wait that the new page is loaded
            .waitForElementVisible('@body', 2000)
            // Verify the URL of the new page
            .assert.urlContains(newpage) 
    },
    validatererror: function(error){
        return this
            // Wait that the error element is loaded
            .waitForElementVisible('@field_error', 2000)
            // Verify the error message
            .assert.containsText('@field_error', error)
    },
    clearfields: function(){
        return this
            // clear value the username field
            .clearValue('@username')
            // clear value the password field
            .clearValue('@password')

    }
}

// Define the elements used to login 
module.exports = {
    url: globals.getUrl(),
    commands: [loginCommands], 
    elements: {
        username: {
            selector: 'input[data-test=username]'
        },
        password: {
            selector: 'input[data-test=password]'
        },
        login_button: {
            selector: 'input[data-test=login-button]'
        },
        field_error: {
            selector: 'h3[data-test=error]'
        },
        body: {
            selector: 'body'
        }
    }
}