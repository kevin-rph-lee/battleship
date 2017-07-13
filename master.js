var answer = parseInt((Math.random() * (3 - 1 + 1)), 10) + 1;
//creating the answer and sending it to the console for debugging
//console.log(answer) //Let's hide the console log

var roundCount = 1; //Counting the rounds. Starts at one.
var wins = 0; // how many times you've won
var losses = 0; // How many times you've lost

function userSelect(selection){
  // var msg = A message to show the user after they select an answer
  var msg = 'You guessed ' + selection + '.  The answer was ' + answer + '. ';
  
//User selects a choice and we get a pop up depending if they got it correct
  if (selection == answer){
    wins++; //increase win count
    msg += 'You win! You\'ve won '+ wins + ' out of ' + roundCount+ ' rounds <br>'; // Add 'You Win!' to the msg
  } else{
    msg +='You lose! <br>'; // Add 'You Lose!' to the msg
    losses++; //Increase lose count
  }
  
  // This score message will show what round we're on, how many wins, how many losses, and the approx. percentage of games won.
  var scoreMsg = "Round " + roundCount + ": Wins: " + wins + ". Losses: " + losses;
  scoreMsg += " Win Percentage: ~" + Math.round((wins / roundCount) * 100 )+"%<br>";
  
  $('#result').html('Current Guess: ' + msg + scoreMsg); // Update the result message
  $('.test').append('Round ' + roundCount + ': ' +msg); // Append round log to the end of the page.
  roundCount++ //Increment round count.
  answer = parseInt((Math.random() * (3 - 1 + 1)), 10) + 1;  // Regenerate a new answer every select.
}