// tip calculation function
function calculatedTip(billAmount) {

  if (billAmount < 50) {
    var tip = billAmount*0.2;
    return tip;
  } else 
  if (billAmount >= 50 && billAmount <= 200) {
    tip = billAmount*0.15;
    return tip;
  } else {
    tip = billAmount*0.1;
    return tip;
  }

}

// total amount calculation function
function paidAmount(billAmount) {
  
  return calculatedTip(billAmount) + billAmount;
}


// array for tips
var tips = [calculatedTip(124), calculatedTip(48), calculatedTip(268)];
  console.log(tips);

var amounts = [paidAmount(200), paidAmount(48), paidAmount(268)];
  console.log(amounts);