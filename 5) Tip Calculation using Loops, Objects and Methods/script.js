// for john
var john = {
  name: 'John',
  billAmount: [124, 48, 268, 180, 42],
  tips: [],
  paidAmount: [],
  calcTip: function() {
    // loop starts
    for(var i = 0; i < this.billAmount.length; i++) {
      
      // for less than 50$
      if (this.billAmount[i] < 50) {
        this.tips[i] = 0.2 * this.billAmount[i];
      } else
      // for from 50$ to 200$
      if (this.billAmount[i] >= 50 && this.billAmount[i] <= 200) {
        this.tips[i] = 0.15 * this.billAmount[i];
      } else {
      // for more than 200$
        this.tips[i] = 0.1 * this.billAmount[i];
      }
      this.paidAmount[i] = this.tips[i] + this.billAmount[i]; 
    }
    // loop ended
  }
}

john.calcTip();

console.log(john.tips);
console.log(john.paidAmount);





// for Mark
var mark = {
  name: 'Mark',
  billAmount: [77, 375, 110, 45],
  tips: [],
  paidAmount: [],
  calcTip: function () {
    // loop starts
    for (var i = 0; i < this.billAmount.length; i++) {

      // for less than 100$
      if (this.billAmount[i] < 100) {
        this.tips[i] = 0.2 * this.billAmount[i];
      } else
        // for from 100$ to 300$
        if (this.billAmount[i] >= 100 && this.billAmount[i] <= 300) {
          this.tips[i] = 0.1 * this.billAmount[i];
        } else {
          // for more than 300$
          this.tips[i] = 0.25 * this.billAmount[i];
        }
      this.paidAmount[i] = this.tips[i] + this.billAmount[i];
    }
    // loop ended
  }
}

mark.calcTip();

console.log(mark.tips);
console.log(mark.paidAmount);


// function to calculate the average of tips
function totalTip(tips) {

  for(var i = 0, sum = 0; i < tips.length; i++) {
    sum = sum + tips[i];
  }
  return sum / tips.length;
}

john.average = totalTip(john.tips);
mark.average = totalTip(mark.tips);
console.log(john, mark);

// final comparison
if(john.average > mark.average) {
  console.log(john.name + ' paid more tips with an average of ' + john.average);
} else {
  console.log(mark.name + ' paid more tips with an average of ' + mark.average);
}