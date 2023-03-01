function getUpdateElement(increseNumber)
{
    const phonFiledElement = document.getElementById('phoneElementTextID');
    const phonFiledElementString = phonFiledElement.value;
    const phonFiledElementNumber  = parseInt(phonFiledElementString);
    let inputupdateNumber;
    if(increseNumber === true)
    {
        inputupdateNumber = phonFiledElementNumber + 1;
    }
    else if(increseNumber === false)
    {
        inputupdateNumber = phonFiledElementNumber - 1;
    }

    phonFiledElement.value = inputupdateNumber;
    
    return inputupdateNumber;
  
}

function getAddedTotalPrice(caseNumber)
{
    const totalPrice = caseNumber * 1219;
    const phonePriceID = document.getElementById('phone_Price_ID');
    phonePriceID.innerText = totalPrice;
    return totalPrice;
}



document.getElementById('phon_id_plus').addEventListener('click', function(){
    const updateElement = getUpdateElement(true);
    getAddedTotalPrice(updateElement);
    subTotalCalculated();
   

})

document.getElementById('phon_id_mines').addEventListener('click', function(){
    const updateElement = getUpdateElement(false);
    getAddedTotalPrice(updateElement);

    subTotalCalculated();
 
 })