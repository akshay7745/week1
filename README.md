# PSEUDO Code

`
START

Initialize variables : cart , products, filteredCartItems, averagePriceOfProducts

Set cart to {totalAmount, items:array of items}

Set cart.totalAmount to 0

Set products to jsonData of products

For i From 0 to products array length -1

Display "Products fetched successfully"

Set products to filteredCartItems to null OR empty array

Display "Click on Add to cart button to add product to cart"

If Clicked on addToCartBtn Then
Call the Function addToCart

Function addToCart(item)

For i from 0 to cart.items array total length -1

If item.id = cart.items[i].id Then
a. Set cart.items[i].quantity to cart.items[i].quantity+1
b. Set cart.totalPrice to cart.totalPrice + cart.items[i].price
c. Display "Increased cart item quantity"

Else
a. Set cart.items[i].quantity to 1
b. Set cart.totalPrice to cart.totalPrice + cart.items[i].price
c. Display "Item added to cart successfully"

Return cart

Display "Click on cart Icon"

If clicked on cart Icon Then
Display "Opening cart"

End Function

Display "Click on remove product from cart button"

Call Function removeProduct

Function removeProduct (item)

For i from 0 to cart.items array total length -1

If item.id = cart.items[i].id Then
a. Set cart.totalPrice to cart.totalPrice - (cart.items[i].price \* cart.items[i].quantity)
b. Filter the item with id items.id from cart.items array by using filter method
c. Display "Item removed from cart successfully"

Return cart

End Function

Call The averagePrice function

Function averagePrice (cart)

Set averagePriceOfProducts to 0

If no items present in cart Then
Display "average price is 0"
Else

Set averagePriceOfProducts to cart.totalAmount / cart.items.length

Return averagePriceOfProducts

End Function

Display "Click on sort product from low to high button to sort"

Call Function sortCartProducts

Function sortCartProducts (cart)

If cart.items.length>0

Set cart.items to cart.items.sort((a,b)=>a.price - b.price);

Return Nothing

End Function

Display "Click on clearCartBtn button to clear the cart"

If clicked on clearCartBtn Then

Call Function clearCart

Function clearCart (cart)

Set cart.items to []
Set cart.totalAmount to 0

Return Cart

End Function

END
`
