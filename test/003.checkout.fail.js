module.exports = {
    // Test case to navigate checkout
    'Navigate checkout test': function (browser) {
        let saucedemo1 = browser.page.login();
        saucedemo1
            // Execute the command to open the page
            .openpage('Swag Labs')
            // Execute the command to fill the form
            .filllogin('standard_user', 'secret_sauce')
            // Execute the command to login
            .loginpage('inventory.html')  
        
        let saucedemo2 = browser.page.header();
        saucedemo2
            // Execute the command to open the cart
            .opencart('cart.html')
        
        let saucedemo3 = browser.page.cart();
        saucedemo3
            // Execute the command to make checkout
            .makecheckout('checkout-step-one.html')                 
    },

    // Test case to make checkout firstname required
    'Checkout firstname required test': function (browser) {
        let saucedemo = browser.page.checkout(); 
            // Execute the command fill form
            saucedemo.fillcheckout('', '', '')     
            // Execute the command to verify the error message
            .validatererror('First Name')        
    },

    // Test case to make checkout lastname required
    'Checkout lastname required test': function (browser) {
        let saucedemo = browser.page.checkout(); 
            // Execute the command fill form
            saucedemo.fillcheckout('Felipe', '', '')     
            // Execute the command to verify the error message
            .validatererror('Last Name')        
    },

    // Test case to make checkout zip required
    'Checkout zip required test': function (browser) {
        let saucedemo = browser.page.checkout(); 
            // Execute the command fill form
            saucedemo.fillcheckout('Felipe', 'Granada', '')     
            // Execute the command to verify the error message
            .validatererror('Postal Code')        
    },
    

}