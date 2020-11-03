// for John
var John = {
  firstName: 'John',
  lastName: 'Smith',
  mass: 60, /* in kgs */
  height: 1.75, /* in metres */
  calcBMI: function() {
    this.BMI = this.mass / (this.height**2);
    return this.BMI;
  }
}
console.log(John);


// for Mark
var Mark = {
  firstName: 'Mark',
  lastName: 'Jhonson',
  mass: 90, /* in kgs */
  height: 1.88, /* in metres */
  calcBMI: function () {
    this.BMI = this.mass / (this.height ** 2);
    return this.BMI;
  }
}
console.log(Mark);


// comparing and printing in console
if (John.calcBMI() > Mark.calcBMI()) {
  console.log(John.firstName + ' ' + John.lastName + ' has the higher BMI which is ' + John.BMI);
} else 
if (Mark.calcBMI() > John.calcBMI()) {
  console.log(Mark.firstName + ' ' + Mark.lastName + ' has the higher BMI which is ' + Mark.BMI);
} else {
  console.log('Both have the same BMI of ' + John.BMI);
}