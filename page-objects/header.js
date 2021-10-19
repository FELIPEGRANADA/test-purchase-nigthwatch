const globals = require("../globals")

var headerCommands = {
    openmenu: function(){
        return this
            // Validate if exists the element Menu Button
            .assert.visible('@menu_button')
            // Execute action click in the element Menu Button
            .click('@menu_button') 
            // Wait that the menu is showed
            .waitForElementVisible('@menu_div', 2000)            
    },
    logoutpage: function(){
        return this
            // Validate if exists the item Logout
            .assert.visible('@logout_item')
            // Execute action click in the element Logout Item
            .click('@logout_item') 
            // Wait that the new page is loaded
            .waitForElementVisible('@body', 2000)
            // Verify the URL the index page
            .assert.urlEquals(globals.getUrl())
    },
    opencart: function(newpage){
        return this
            // Execute action click in the element cart 
            .click('@link_cart') 
            // Wait that the new page is loaded
            .waitForElementVisible('@body', 2000)
            // Verify the URL of the new page
            .assert.urlContains(newpage) 
    }
}

// Define the elements used to header 
module.exports = {
    commands: [headerCommands], 
    elements: {
        menu_button: {
            selector: 'button[id=react-burger-menu-btn]'
        },
        menu_div: {
            selector: 'div[class=bm-menu-wrap]'
        },
        logout_item: {
            selector: 'a[id=logout_sidebar_link]'
        },
        link_cart: {
            selector: 'a[class=shopping_cart_link]'
        },
        body: {
            selector: 'body'
        }
    }
}