

let element = 0
let Cart = document.getElementById('cartNum');
let totalPrice = 0
let productName = []

function addCart(price,product) {
    element++
    Cart.innerText = element
    let priceZ = price
    totalPrice = priceZ + priceZ
}

// let intro = 'welcome to your number best shoping'
// alert(intro)
 
// intro = 'You can get your best qulity here '
// alert(intro)

// const place = 'Lagos'
// alert(place) 

let num = 99

if(num >=99 && num <=88) {
    console.log ('A');
}
else if(num >=79 || num <=60){
    console.log('B');
}
else if(num >=59 || num <=40){
    console.log('C');
}
else{
    console.log('F');
}