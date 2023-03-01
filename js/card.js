function updateCaseNumber (increseNumber){
    const inputFiledPlus = document.getElementById('inputFiled_Plus');
    const inputFiledPlusString = inputFiledPlus.value;
    const inputFiledPlusNumber = parseInt(inputFiledPlusString);
    let InputPlusNumber ;
    if(increseNumber === true)
    {
         InputPlusNumber  = inputFiledPlusNumber + 1;
    

    }
    else if(increseNumber === false){
        InputPlusNumber  = inputFiledPlusNumber - 1;
    
    }

    inputFiledPlus.value = InputPlusNumber;
    return InputPlusNumber;
    

}

function getAddedTotalcasePrice (caseNumber)
{
    const caseTotalPrice = caseNumber * 59;

    const caseTextShow = document.getElementById('case_text_ID');
    caseTextShow.innerText = caseTotalPrice;
    return caseTotalPrice;
}


document.getElementById('btn_case_plus').addEventListener('click',function(){
    const caseNumber = updateCaseNumber(true);
   const casePrice =  getAddedTotalcasePrice(caseNumber);
   subTotalCalculated();
   
    
    
})

document.getElementById('btn_case_mines').addEventListener('click',function(){
   const caseNumber = updateCaseNumber(false);
   const casePrice =  getAddedTotalcasePrice(caseNumber);
   subTotalCalculated();
})