module.exports = {
    // Test case to Login
    'Login test': function (browser) {
        let saucedemo = browser.page.login();
        saucedemo
            // Execute the command to open the page
            .openpage('Swag Labs')
            // Execute the command to fill the form
            .filllogin('standard_user', 'secret_sauce')
            // Execute the command to login
            .loginpage('inventory.html')           
    },

    // Test case to order by name (Z - A)
    'OrderName Z-A test': function (browser) {
        let saucedemo = browser.page.inventory();
        saucedemo
            // Execute the command to order by name (Z - A)
            .ordername('Z-A')            
    },

     // Test case to order by name (A - Z)
     'OrderName A-Z test': function (browser) {
        let saucedemo = browser.page.inventory();
        saucedemo
            // Execute the command to order by name (A - Z)
            .ordername('A-Z')
            
    },

    // Test case to order by price (Low - High)
    'OrderPrice Low-High test': function (browser) {
        let saucedemo = browser.page.inventory();
        saucedemo
            // Execute the command to order by price (Low - High)
            .orderprice('lohi')
        
    },

    // Test case to order by price (High - Low)
    'OrderPrice High-Low test': function (browser) {
        let saucedemo = browser.page.inventory();
        saucedemo
            // Execute the command to order by price (High - Low)
            .orderprice('hilo')
        
    },

    // Test case to Add product to cart
    'Add Product Cart test': function (browser) {
        let saucedemo1 = browser.page.inventory();
        saucedemo1
            // Execute the command to add a product to cart
            .addbackpackcart('1')
            .addtshirtcart('2')
            .addjacketcart('3')
            .addonesiecart('4')

        let saucedemo2 = browser.page.header();
        saucedemo2
            // Execute the command to open the cart
            .opencart('cart.html')    
            
        let saucedemo3 = browser.page.cart();
        // Execute the command to validate products in the cart
        saucedemo3.validateexistsproduct('Backpack')       
        saucedemo3.validateexistsproduct('T-Shirt')
        saucedemo3.validateexistsproduct('Jacket')
        saucedemo3.validateexistsproduct('Onesie')
        // Execute the command to return inventory
        saucedemo3.openinventory('inventory.html')
    },

    // Test case to Remove product from inventory
    'Remove Product Cart From Inventory test': function (browser) {
        let saucedemo1 = browser.page.inventory();
        saucedemo1
            // Execute the command to add a product to cart
            .removejacketcart('3')

        let saucedemo2 = browser.page.header();
        saucedemo2
            // Execute the command to open the cart
            .opencart('cart.html')    
            
        let saucedemo3 = browser.page.cart();
        // Execute the command to validate products in the cart
        saucedemo3.validatenotexistsproduct('Jacket')       
    },

    // Test case to Remove product from Cart
    'Remove Product Cart test': function (browser) {   
        let saucedemo = browser.page.cart();
        saucedemo
            // Execute the command to remove products from cart
            .removeonesiecart('2')  
            // Execute the command to validate products in the cart
            .validatenotexistsproduct('Onesie')   
    },

    // Test case to make checkout
    'Make checkout test': function (browser) {   
        let saucedemo1 = browser.page.cart();
        saucedemo1
            // Execute the command to make checkout
            .makecheckout('checkout-step-one.html') 
        
        let saucedemo2 = browser.page.checkout(); 
            // Execute the command fill form
            saucedemo2.fillcheckout('Felipe', 'Granada', '760300')  
            // Execute the command make checkout
            saucedemo2.makecheckout('checkout-step-two.html')
            // Validate the purchase summary
            saucedemo2.validateItemsTotal() 
            saucedemo2.validateTotal()
            // Execute the command finish checkout
            saucedemo2.finishcheckout('checkout-complete.html')
            // Execute the command back home
            saucedemo2.backhome('inventory.html')
    },

    // Test case to Logout
    'Logout test': function (browser) {
        let saucedemo = browser.page.header();
        saucedemo
            // Execute the command to open the menu
            .openmenu()  
            // Execute the command to logout the page
            .logoutpage()
            
    }
}