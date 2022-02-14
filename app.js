document.getElementById('case-plus').addEventListener('click', function(){
    // console.log('Checked');
    const caseInput = document.getElementById('case-number');
    const caseNumber = caseInput.value;
    caseInput.value = parseInt(caseNumber) + 1;
    
})