// for John
var scoreJohn = (89 + 120 + 103) / 3;

// for Mike
var scoreMike = (116 + 94 + 123) / 3;

// for Mary
var scoreMary = (97 + 104 + 105) / 3;

  console.log(scoreJohn, scoreMike, scoreMary);


// deciding the winner

// if (scoreJohn > scoreMike) {
//   console.log('John\'s team won with an avg score of ' + scoreJohn);
// } else
// if (scoreMike > scoreJohn) {
//   console.log('Mike\'s team won with an avg score of ' + scoreMike);
// } else {
//   console.log('The match was a draw with an avg score of ' + scoreMike)
// }

if (scoreJohn > scoreMary && scoreJohn > scoreMike) {
  console.log('John\'s team won with an avg score of ' + scoreJohn);
} else 
if (scoreMike > scoreMary && scoreMike > scoreJohn) {
  console.log('Mike\'s team won with an avg score of ' + scoreMike);
} else 
if (scoreMary > scoreMike && scoreMary > scoreJohn) {
  console.log('Mary\'s team won with an avg score of ' + scoreMary);
} else {
  console.log('There was a draw');
}

