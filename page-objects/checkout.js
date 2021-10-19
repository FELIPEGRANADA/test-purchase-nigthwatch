const globals = require("../globals")

var checkoutCommands = {
    fillcheckout: function(firstname, lastname, zip){
        return this
            // Validate if exists the element FirstName
            .assert.visible('@firstname')
            // Write in the element FirstName
            .setValue('@firstname', firstname)
            // Validate if exists the element LastName
            .assert.visible('@lastname')
            // Write in the element LastName
            .setValue('@lastname', lastname)
            // Validate if exists the element Zip
            .assert.visible('@zip')
            // Write in the element Zip
            .setValue('@zip', zip)
            // Validate if exists the element continue button
            .assert.visible('@continue_button')
            // Execute action click in the element continue Button
            .click('@continue_button')
    },
    makecheckout: function(newpage){
        return this
            // Wait that the new page is loaded
            .waitForElementVisible('@body', 2000)
            // Verify the URL of the new page
            .assert.urlContains(newpage) 
    },
    validateItemsTotal: function(){
        return this
            // Validate that exists the summary totals
            .assert.visible('@item_total')
            .assert.visible('@tax_total')
            .assert.visible('@total')

            // Get elements (Products)
            .api.elements('@product_item_price', elements => {
                // Array with the products price in order getted
                var totalProducts = 0
                var countProducts = 0
                // Get each element (Product)
                elements.value.forEach(element => {
                    // Get the text of the element (Product price)
                    this.api.elementIdAttribute(element.ELEMENT, 'innerText', productPrice => {                    
                        countProducts++
                        // Sum the prices of the products in the checkout
                        totalProducts = totalProducts + (Number(productPrice.value.substring(1)))  
                        // If is the final proccesed product
                        if(elements.value.length === countProducts){ 
                            this.getText('@item_total', itemTotal => {
                                console.log(totalProducts)
                                this.assert.ok(totalProducts === Number(itemTotal.value.substring(13)))
                            })
                            
                        } 
                    })
                })
            })
    },
    validateTotal: function(){
        return this 
            // Get the texts of totals to compare the result
            .getText('@item_total', itemTotal => {
                // Get the total of the item
                var itemTotalValue = Number(itemTotal.value.substring(13))
                this.getText('@tax_total', taxTotal => {
                    // Get the total of the tax
                    var taxTotalValue = Number(taxTotal.value.substring(6))
                    this.getText('@total', total => {
                        // Get the total of the bill
                        var totalValue = Number(total.value.substring(8))
                        console.log(itemTotalValue + ' ' + taxTotalValue + ' ' + totalValue)
                        this.assert.ok(itemTotalValue + taxTotalValue === totalValue)
                    })
                })
            })
    },
    finishcheckout: function(newpage){
        return this
            // Validate if exists the element finish button
            .assert.visible('@finish_button')
            // Execute action click in the element finish Button
            .click('@finish_button')
            // Wait that the new page is loaded
            .waitForElementVisible('@body', 2000)
            // Verify the URL of the new page
            .assert.urlContains(newpage)
            // Verify the end process
            .assert.containsText('@title_span', 'COMPLETE')
            .assert.containsText('@title_header', 'THANK YOU')
    },
    backhome: function(newpage){
        return this
            // Validate if exists the element home button
            .assert.visible('@home_button')
            // Execute action click in the element home Button
            .click('@home_button')
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
}

// Define the elements used to login 
module.exports = {
    commands: [checkoutCommands], 
    elements: {
        firstname: {
            selector: 'input[data-test=firstName]'
        },
        lastname: {
            selector: 'input[data-test=lastName]'
        },
        zip: {
            selector: 'input[data-test=postalCode]'
        },
        continue_button: {
            selector: 'input[data-test=continue]'
        },
        item_total: {
            selector: 'div[class=summary_subtotal_label]'
        },
        tax_total: {
            selector: 'div[class=summary_tax_label]'
        },
        total: {
            selector: 'div[class=summary_total_label]'
        },
        product_item_price:{
            selector: 'div[class=inventory_item_price]'
        },
        finish_button: {
            selector: 'button[data-test=finish]'
        },
        title_span: {
            selector: 'span[class=title]'
        },
        title_header: {
            selector: 'h2[class=complete-header]'
        },
        home_button: {
            selector: 'button[data-test=back-to-products]'
        },
        field_error: {
            selector: 'h3[data-test=error]'
        },
        body: {
            selector: 'body'
        }
    }
}