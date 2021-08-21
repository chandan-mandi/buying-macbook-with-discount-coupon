function updatePrice(componentId,price) {
    const memoryCostText = document.getElementById(componentId);
    const memoryCostNumber = memoryCostText.innerText;
    memoryCostText.innerText = price;
    calcutaleTotal();
}
// get memory cost
document.getElementById('memory-8gb').addEventListener('click',function(){
    updatePrice('memory-cost',0);
});
document.getElementById('memory-16gb').addEventListener('click',function(){
    updatePrice('memory-cost',180);
});
// get storage cost
document.getElementById('storage-256gb').addEventListener('click',function(){
    updatePrice('storage-cost',0);
});
document.getElementById('storage-512gb').addEventListener('click',function(){
    updatePrice('storage-cost',100);
});
document.getElementById('storage-1tb').addEventListener('click',function(){
    updatePrice('storage-cost',180);
});
// get delivery cost
document.getElementById('free-delivery').addEventListener('click',function(){
    updatePrice('delivery-cost',0);
});
document.getElementById('paid-delivery').addEventListener('click',function(){
    updatePrice('delivery-cost',20);
});

function getComponentCost(component) {
    const componentInput = document.getElementById(component + '-cost');
    const componentNumber = parseInt(componentInput.innerText);
    return componentNumber;
}

function calcutaleTotal() {
    const bestPrice = getComponentCost('best');
    const memoryTotal = getComponentCost('memory');
    const storageTotal = getComponentCost('storage');
    const deliveryTotal = getComponentCost('delivery');
    const subTotal = bestPrice + memoryTotal + storageTotal + deliveryTotal;
    // update on the html
    document.getElementById('total-price').innerText = subTotal;
    
    document.getElementById('discounted-price').innerText = subTotal;
    return subTotal;
}


document.getElementById('promo-button').addEventListener('click',function(){
    const promoInput = document.getElementById('promo-input');
    const promoInputText = promoInput.value;

    const discount = subTotal / 100;
    const discountTotal = discount * 20;
    const discountAmount = parseInt(discountTotal);
    const totalWithDiscount = subTotal - discountAmount;
    if(promoInputText == "stevekaku"){
        document.getElementById('discounted-price').innerText = totalWithDiscount;
    } else {
        alert('Please enter a valid promo code');
    }
})