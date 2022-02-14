function updateCaseNumber(isIncreasing){
    const caseInput = document.getElementById('case-number');
    let caseNumber = caseInput.value;
    if(isIncreasing == true){
        caseNumber = parseInt(caseNumber) + 1;
    }
    else if(caseNumber > 0){
        caseNumber = parseInt(caseNumber) - 1;
    }
    caseInput.value = caseNumber;

    // Update case total
    const caseTotal = document.getElementById('case-total');
    caseTotal.innerText = caseNumber * 50;
}


// Number Increage
document.getElementById('case-plus').addEventListener('click', function(){
    // console.log('Checked');
    /*
    const caseInput = document.getElementById('case-number');
    const caseNumber = caseInput.value;
    caseInput.value = parseInt(caseNumber) + 1;
    */
    updateCaseNumber(true);
    
})

// Number decreage
document.getElementById('case-minus').addEventListener('click', function(){
    /*
    const caseInput = document.getElementById('case-number');
    const caseNumber = caseInput.value;
    */
    updateCaseNumber(false);
})