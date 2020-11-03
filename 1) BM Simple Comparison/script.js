var massMark, massJohn, heightMark, heightJohn, bmiMark, bmiJohn;

// for Mark
massMark = 60;
heightMark = 1.7;

bmiMark = massMark / (heightMark*heightMark);

console.log('BMI of Mark is ' + bmiMark);


// for John
massJohn = 75;
heightJohn = 1.89;

bmiJohn = massJohn / (heightJohn ** 2);

console.log('BMI of John is ' + bmiJohn);

// who has higher BMI?

var higherBMI = bmiMark > bmiJohn;

console.log('Is BMI of Mark higher than BMI of John? ' + higherBMI)