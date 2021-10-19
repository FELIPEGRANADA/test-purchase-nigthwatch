const globals = require("../globals")

var cartCommands = {
    validateexistsproduct: function(product){
        return this
            // Get elements (Products)
            .api.elements('@product_item_name', elements => {
                var existsProduct = false
                var countProducts = 0
                // Get each element (Product)
                elements.value.forEach(element => {
                    // Get the text of the element (Product name)
                    this.api.elementIdAttribute(element.ELEMENT, 'innerText', productName => {
                        countProducts++
                        // If the product is included in the list
                        if(productName.value.includes(product)){
                            existsProduct = true
                        }
                        // If is the final proccesed product
                        if(elements.value.length === countProducts){
                            this.assert.ok(existsProduct)
                        }
                    })
                })
            })            
    },
    validatenotexistsproduct: function(product){
        return this
            // Get elements (Products)
            .api.elements('@product_item_name', elements => {
                var existsProduct = false
                var countProducts = 0
                // Get each element (Product)
                elements.value.forEach(element => {
                    // Get the text of the element (Product name)
                    this.api.elementIdAttribute(element.ELEMENT, 'innerText', productName => {
                        countProducts++
                        // If the product is included in the list
                        if(productName.value.includes(product)){
                            existsProduct = true
                        }
                        // If is the final proccesed product
                        if(elements.value.length === countProducts){
                            this.assert.ok(!existsProduct)
                        }
                    })
                })
            })            
    },
    openinventory: function(newpage){
        return this
            // Execute action click in the element continue shopping 
            .click('@shopping_button') 
            // Wait that the new page is loaded
            .waitForElementVisible('@body', 2000)
            // Verify the URL of the new page
            .assert.urlContains(newpage) 
    },
    removeonesiecart: function(productCount){
        return this
            // Validate if exists the button removeCart
            .assert.visible('@removecart_onesie')
            // Execute action click in the button removeCart
            .click('@removecart_onesie') 
            // Wait that the cart's counter is visible
            .waitForElementVisible('@cart_counter', 2000)
            // Valida text of the cart's counter
            .assert.containsText('@cart_counter', productCount)
    },
    makecheckout: function(newpage){
        return this
            // Execute action click in the element checkout 
            .click('@checkout_button') 
            // Wait that the new page is loaded
            .waitForElementVisible('@body', 2000)
            // Verify the URL of the new page
            .assert.urlContains(newpage) 
    },

}

// Define the elements used to cart 
module.exports = {
    commands: [cartCommands], 
    elements: {
        product_item_name:{
            selector: 'div[class=inventory_item_name]'
        },
        shopping_button: {
            selector: 'button[data-test=continue-shopping]'
        },
        removecart_onesie: {
            selector: 'button[data-test=remove-sauce-labs-onesie]'
        },
        cart_counter: {
            selector: 'span[class=shopping_cart_badge]'
        },
        checkout_button: {
            selector: 'button[data-test=checkout]'
        },
        body: {
            selector: 'body'
        }
    }
}