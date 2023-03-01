function getTextElementValueByID(elementID)
{
    const phonePriceText = document.getElementById(elementID);
    const phonePriceTextString =  phonePriceText.innerText;
    const phonePriceNumber = parseFloat(phonePriceTextString);
    return phonePriceNumber;
}

function setTextElementValueByID (elementID, value)
{
    const subTotalElement  = document.getElementById(elementID);
   subTotalElement.innerText = value;
}

function subTotalCalculated(){
    const currentPhonePrice  = getTextElementValueByID('phone_Price_ID');
    const currentCasePrice = getTextElementValueByID('case_text_ID');
    let subtotalPrice = currentPhonePrice + currentCasePrice ;
    setTextElementValueByID('subtotal_ID',subtotalPrice);
    
   
   let taxTotalString = (subtotalPrice * 0.1).toFixed(2);
   const taxTotal = parseFloat(taxTotalString);
   setTextElementValueByID('tax_ID',taxTotal);

   let finalPrice = subtotalPrice + taxTotal;
   setTextElementValueByID('fianlPrice_ID',finalPrice);
}