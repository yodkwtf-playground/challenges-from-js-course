(function () {


  // function constructor
  function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  }

  // prototype for displaying a random question
  Question.prototype.displayQuestion = function () {
    // show the question of the object
    console.log(this.question);
    // show the answers of the object
    for (var i = 0; i < this.answers.length; i++) {
      console.log(i + 1 + ': ' + this.answers[i])
    }
  }

  var score = 0;
  // prototype for checking an answer
  Question.prototype.checkAnswer = function (ans) {
    if (ans === this.correct) {
      console.log('Congrats! Correct answer :)');
      score++;
    } else {
      console.log('OOPS! Wrong answer :(');
    }
    console.log('Your current score is: ' + score);
    console.log(' ');
    console.log('--------------------------------------');
    console.log(' ');
  }



  var Ques1 = new Question('How many players are there in each team in Cricket?', [7, 11, 22], 2);
  var Ques2 = new Question('Who was the first player to score a double century in ODI cricket?', ['Virendra Sehwag', 'Chris Gayle', 'Sachin Tendulkar', 'Rohit Sharma'], 3);
  var Ques3 = new Question('How many overs are there in ODI cricket?', [50, 20, 90], 1);
  var Ques4 = new Question('Who won the first T-20 world cup?', ['India', 'Australia', 'Pakistan'], 1);
  var Ques5 = new Question('Who has the highest individual score of 400 in test cricket?', ['Sanath Jayasurya', 'Briab Lara'], 2);


  var QuesArr = [Ques1, Ques2, Ques3, Ques4, Ques5];

  gameLoop();

  function gameLoop () {

    // choosing a random number bewtween 0 and 4
    var n = Math.floor(Math.random() * QuesArr.length);
  
    // selecting a random element from the above array and displaying its ques
    QuesArr[n].displayQuestion();
  
  
    // asking using for answer
    var enterAns = (prompt('Enter the correct answer number -'));
  
    if(enterAns !== 'exit') {
    // checking if the ans is correct
    QuesArr[n].checkAnswer(parseInt(enterAns));

    // do everything again
    gameLoop();
    }

  }


})()