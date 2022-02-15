// Products function
function updateProductNumber(product, price, isIncreasing){
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if(isIncreasing == true){
        productNumber = parseInt(productNumber) + 1;
    }
    else if(productNumber > 1){
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;

    // Update case total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
}


// Phone increase & decrease events
document.getElementById('phone-plus').addEventListener('click', function(){
    updateProductNumber('phone', 1200, true);
})
document.getElementById('phone-minus').addEventListener('click', function(){
    updateProductNumber('phone', 1200, false)
})



// handle case increase & decrease events
// Number Increage
document.getElementById('case-plus').addEventListener('click', function(){
    // console.log('Checked');
    /*
    const caseInput = document.getElementById('case-number');
    const caseNumber = caseInput.value;
    caseInput.value = parseInt(caseNumber) + 1;
    */
    updateProductNumber('case', 50, true);
    
})

// Number decreage
document.getElementById('case-minus').addEventListener('click', function(){
    /*
    const caseInput = document.getElementById('case-number');
    const caseNumber = caseInput.value;
    */
    updateProductNumber('case', 50, false);
})