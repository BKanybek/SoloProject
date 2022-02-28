export function calcSubPrice(product) {
    console.log(product, +product.count , +product.item.price, 'calcSub')
    return product.count * product.item.price
}

export function calcTotalPrice(products) {
    let totalPrice = 0;

    products.forEach(elem => {
        totalPrice += elem.subPrice
    })
    return totalPrice
}

export function getCountProductsInCart(){
    let cart = JSON.parse(localStorage.getItem('cart'))
    return cart ? cart.products.lenght : 0
}