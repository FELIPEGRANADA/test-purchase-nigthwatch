const globals = require("../globals")

var inventoryCommands = {
    ordername: function(order){
        return this
            // Validate if exists the element Order List
            .assert.visible('@order_list') 
            // Execute action click in the element Order List
            .click('@order_list', ()=>{
                // Determine the order to execute
                if (order === 'Z-A'){ this.click('@ol_optionza') }
                else if (order === 'A-Z'){ this.click('@ol_optionaz') }               
            })  
            // Get elements (Products)
            .api.elements('@product_item_name', elements => {
                // Array with the products names in order getted
                var productsName = []
                // Get each element (Product)
                elements.value.forEach(element => {
                    // Get the text of the element (Product name)
                    this.api.elementIdAttribute(element.ELEMENT, 'innerText', productName => {                    
                        // Add the product's name in the proccesed order
                        productsName.push(productName.value)  
                        // If is the final proccesed product
                        if(productsName.length === elements.value.length){
                            console.log(productsName)
                            // Copy the array obtained to sort and compare the result 
                            var productsNameCopy = productsName.slice()
                            // Sort the copy array
                            productsNameCopy.sort((a, b) => {
                                a = a.toLowerCase()
                                b = b.toLowerCase()
                                if(a == b) { return 0 }
                                else if(order === 'Z-A' && a > b) { return -1 }
                                else if(order === 'A-Z' && a < b) { return -1 }
                                else { return 1 }
                            });
                            console.log(productsNameCopy)
                            // Compare the length and each array element to determine if they are equal
                            this.assert.ok(productsName.length === productsNameCopy.length && 
                                productsName.every(function(v,i) { return v === productsNameCopy[i] } )
                            )
                        } 
                    })
                })
            })                
    },
    orderprice: function(order){
        return this
            // Validate if exists the element Order List
            .assert.visible('@order_list') 
            // Execute action click in the element Order List
            .click('@order_list', ()=>{
                // Determine the order to execute
                if (order === 'lohi'){ this.click('@ol_optionlohi') }
                else if (order === 'hilo'){ this.click('@ol_optionhilo')}
            })  
            // Get elements (Products)
            .api.elements('@product_item_price', elements => {
                // Array with the products price in order getted
                var productsPrice = []
                // Get each element (Product)
                elements.value.forEach(element => {
                    // Get the text of the element (Product price)
                    this.api.elementIdAttribute(element.ELEMENT, 'innerText', productPrice => {                    
                        // Add the product's price in the proccesed order erasing the signal $ and cast number
                        productsPrice.push(Number(productPrice.value.substring(1)))  
                        // If is the final proccesed product
                        if(productsPrice.length === elements.value.length){
                            console.log(productsPrice)
                            // Copy the array obtained to sort and compare the result 
                            var productsPriceCopy = productsPrice.slice()
                            // Sort the copy array
                            productsPriceCopy.sort((a, b) => {
                                if(a == b) { return 0 }
                                else if(order === 'hilo' && a > b) { return -1 }
                                else if(order === 'lohi' && a < b) { return -1 }
                                else { return 1 }
                            });
                            console.log(productsPriceCopy)
                            // Compare the length and each array element to determine if they are equal
                            this.assert.ok(productsPrice.length === productsPriceCopy.length && 
                                productsPrice.every(function(v,i) { return v === productsPriceCopy[i] } )
                            )
                        } 
                    })
                })
            })                
    },
    addbackpackcart: function(productCount){
        return this
            // Validate if exists the button addCart
            .assert.visible('@addcart_backpack')
            // Execute action click in the button addCart
            .click('@addcart_backpack') 
            // Wait that the button removed is visible
            .waitForElementVisible('@removecart_backpack', 2000)
            // Wait that the cart's counter is visible
            .waitForElementVisible('@cart_counter', 2000)
            // Valida text of the cart's counter
            .assert.containsText('@cart_counter', productCount)
    },
    addtshirtcart: function(productCount){
        return this
            // Validate if exists the button addCart
            .assert.visible('@addcart_tshirt')
            // Execute action click in the button addCart
            .click('@addcart_tshirt') 
            // Wait that the button removed is visible
            .waitForElementVisible('@removecart_tshirt', 2000)
            // Wait that the cart's counter is visible
            .waitForElementVisible('@cart_counter', 2000)
            // Valida text of the cart's counter
            .assert.containsText('@cart_counter', productCount)
    },
    addjacketcart: function(productCount){
        return this
            // Validate if exists the button addCart
            .assert.visible('@addcart_jacket')
            // Execute action click in the button addCart
            .click('@addcart_jacket') 
            // Wait that the button removed is visible
            .waitForElementVisible('@removecart_jacket', 2000)
            // Wait that the cart's counter is visible
            .waitForElementVisible('@cart_counter', 2000)
            // Valida text of the cart's counter
            .assert.containsText('@cart_counter', productCount)
    },
    addonesiecart: function(productCount){
        return this
            // Validate if exists the button addCart
            .assert.visible('@addcart_onesie')
            // Execute action click in the button addCart
            .click('@addcart_onesie') 
            // Wait that the button removed is visible
            .waitForElementVisible('@removecart_onesie', 2000)
            // Wait that the cart's counter is visible
            .waitForElementVisible('@cart_counter', 2000)
            // Valida text of the cart's counter
            .assert.containsText('@cart_counter', productCount)
    },
    removejacketcart: function(productCount){
        return this
            // Validate if exists the button removeCart
            .assert.visible('@removecart_jacket')
            // Execute action click in the button addCart
            .click('@removecart_jacket') 
            // Wait that the button removed is visible
            .waitForElementVisible('@addcart_jacket', 2000)
            // Wait that the cart's counter is visible
            .waitForElementVisible('@cart_counter', 2000)
            // Valida text of the cart's counter
            .assert.containsText('@cart_counter', productCount)
    }
}

// Define the elements used to Manage inventory 
module.exports = {
    url: globals.getUrl() + 'inventory.html',
    commands: [inventoryCommands],
    elements: {
        order_list: {
            selector: 'select[data-test=product_sort_container]'
        },
        ol_optionaz: {
            selector: 'option[value=az]'
        },
        ol_optionza: {
            selector: 'option[value=za]'
        },
        ol_optionlohi: {
            selector: 'option[value=lohi]'
        },
        ol_optionhilo: {
            selector: 'option[value=hilo]'
        },
        product_item_name:{
            selector: 'div[class=inventory_item_name]'
        },
        product_item_price:{
            selector: 'div[class=inventory_item_price]'
        },
        addcart_backpack: {
            selector: 'button[data-test=add-to-cart-sauce-labs-backpack]'
        },
        removecart_backpack: {
            selector: 'button[data-test=remove-sauce-labs-backpack]'
        },
        addcart_tshirt: {
            selector: 'button[data-test=add-to-cart-sauce-labs-bolt-t-shirt]'
        },
        removecart_tshirt: {
            selector: 'button[data-test=remove-sauce-labs-bolt-t-shirt]'
        },
        addcart_jacket: {
            selector: 'button[data-test=add-to-cart-sauce-labs-fleece-jacket]'
        },
        removecart_jacket: {
            selector: 'button[data-test=remove-sauce-labs-fleece-jacket]'
        },
        addcart_onesie: {
            selector: 'button[data-test=add-to-cart-sauce-labs-onesie]'
        },
        removecart_onesie: {
            selector: 'button[data-test=remove-sauce-labs-onesie]'
        },
        cart_counter: {
            selector: 'span[class=shopping_cart_badge]'
        },
        body: {
            selector: 'body'
        }
    }
}