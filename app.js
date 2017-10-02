
var answerx = 0;
var answery = 0;
var answerx1 = 0;
var answery1 = 0;
var answerx2 = 0;
var answery2 = 0;

var turns = 5;
var gameWinCounter= 0;
var gameLossCounter= 0;
var keepGoing = true;

var hits = 0;



function generateTargets(){
  var dup = false;
  answerx = parseInt((Math.random() * (5 - 1 + 1)), 10) + 1;
  answery = parseInt((Math.random() * (5 - 1 + 1)), 10) + 1;

  while(dup == false){
    answerx1 = parseInt((Math.random() * (5 - 1 + 1)), 10) + 1;
    answery1 = parseInt((Math.random() * (5 - 1 + 1)), 10) + 1;
    if( (answerx1==answerx) &&  (answery1==answery)  ){
      answerx1 = parseInt((Math.random() * (5 - 1 + 1)), 10) + 1;
      answery1 = parseInt((Math.random() * (5 - 1 + 1)), 10) + 1;
    } else{
      dup = true;
    }
  }
  console.log("Targets: " +  answerx,answery + " " + answerx1, answery1);

}










function selectSpace(x,y){
  if(($('#grid'+x+y).data('isHit')==true)){
    console.log("alreay hit!");
  }else if(    (x== answerx && y==answery) || (x== answerx1 && y==answery1) ){
    $('#grid'+x+y).addClass('buttonHit');
    $('#grid'+x+y).removeClass('buttonunknown');
    $('#grid'+x+y).data('isHit', true);
    endTurn('hit');
  } else{
    $('#grid'+x+y).addClass('buttonMissed');
    $('#grid'+x+y).removeClass('buttonunknown');
    $('#grid'+x+y).data('isHit', true);
    endTurn('miss');
  }
}

function reset(){
  //Resets the spaces.
  $('[id^="grid"]').removeClass('buttonunknown');
  $('[id^="grid"]').removeClass('buttonMissed');
  $('[id^="grid"]').removeClass('buttonHit');
  $('[id^="grid"]').addClass('buttonunknown');
  $('[id^="grid"]').data('isHit', false);
  generateTargets();
  turns = 5;
}

function gameWin(){
  gameWinCounter ++;
  $('.wincounter').text("You have " + gameWinCounter + " wins!");
  alert("You win the game!");
  keepGoing =confirm("wanna keep going?");
  if (keepGoing == true){
    reset();
  }
  else{
    gameEnd();
  }
}

function gameLose(){
  gameLossCounter ++;
  $('.losscounter').text("You have " + gameLossCounter + " loses!");
  alert("You lose the game!");
  keepGoing =confirm("wanna keep going?");
  if (keepGoing == true){
    reset();
  }
  else{
    gameEnd();
  }

}

function endTurn(result){
  if(result == "hit"){
    hits ++;
    if(hits == 2){
      gameWin();
    }
  } else{
    turns = turns - 1 ;
    if(turns <=0){
      gameLose();
    }
    $('.turncounter').text("You have " + turns + " left!");
  }
}

function gameEnd(){
  $('.game').remove();
  $('.display').remove();
  $('main').append("<p>You won " + gameWinCounter + " and lost " + gameLossCounter + " times!</p>");
}

generateTargets();


function generateTargets2(){
  var loop = true;
  answerx = parseInt((Math.random() * (5 - 1 + 1)), 10) + 1;
  answery = parseInt((Math.random() * (5 - 1 + 1)), 10) + 1;
  while(loop == true){
    x = parseInt((Math.random() * (4 - 1 + 1)), 10) + 1;
    console.log("caluclating...   X: " + x);

    if(x==1){
      answerx1= answerx + 1;
      answery1= answery;
      console.log("boat A " + answerx + ' ' + answery);
      console.log("boat B " + answerx1 + ' ' + answery1);

      if( (0 == answerx1) || (answerx1 > 5) || (0 == answery1) || (answery1 > 5) ){
        console.log(x);
          answerx1= answerx;
          answery1= answery;

          console.log('invalid position');
      } else{
        answery2=answery;
        if((answerx1+1 > 5)){
          answerx2 = answerx - 1;
        }
        console.log("boat C " + answerx2 + ' ' + answery2);
        console.log('valid position');

          loop = false;
      }

    }else if(x==2){
      answerx1= answerx - 1;
      answery1= answery;
      console.log("boat A " + answerx + ' ' + answery);
      console.log("boat B " + answerx1 + ' ' + answery1);

      if( (0 == answerx1) || (answerx1 > 5) || (0 == answery1) || (answery1 > 5) ){

        answerx1= answerx;
        answery1= answery;
        console.log('invalid position');

      } else{
        //////////////////////
        answery2=answery;
        if((answerx1-1 == 0)){
          answerx2 = answerx + 1;
        }else{
          answerx2 = answerx1 -1;
        }
        console.log("boat C " + answerx2 + ' ' + answery2);
        console.log('valid position');
        loop = false;
      }
    }else if(x==3){
      answerx1= answerx;
      answery1= answery + 1;
      console.log("boat A " + answerx + ' ' + answery);
      console.log("boat B " + answerx1 + ' ' + answery1);

      if( (0 == answerx1) || (answerx1 > 5) || (0 == answery1) || (answery1 > 5) ){

        console.log('invalid position');
        answerx1= answerx;
        answery1= answery;

      } else{
        console.log('valid position');
        answerx2=answerx;
        if((answery1+1 > 5)){
          answery2 = answery-1;
        }
        console.log("boat C " + answerx2 + ' ' + answery2);
        loop = false;
      }
    }else{
      answerx1= answerx;
      answery1= answery - 1;
      if( (0 == answerx1) || (answerx1 > 5) || (0 == answery1) || (answery1 > 5) ){
        answerx1= answerx;
        answery1= answery;
        console.log('invalid position');
      } else{
        answerx2=answerx;
        if((answery1-1 < 1)){
          answery2 = answery + 1;
        }
        console.log("boat C " + answerx2 + ' ' + answery2);
        console.log('valid position');
        loop = false;

      }
    }


  console.log(loop)
  }
}




/**

    if(x==1){
      answerx1= answerx + 1;
      answery1= answery;
      console.log("boat A " + answerx + ' ' + answery);
      console.log("boat B " + answerx1 + ' ' + answery1);
      if( (0 == answerx1 > 5) || (0 == answery1 > 5) ){
        console.log(x);
        console.log("Eval 1: " + (0 == answerx1) );
        console.log("Eval 2: " + (answerx1 > 5) );
        console.log("Eval 3: " + (0 == answery1) );
        console.log("Eval 4: " + (answery1 > 5) );
        console.log("Eval 5: " + (0 == answerx1 > 5));
        console.log("Eval 6: " + (0 == answery1 > 5));
        console.log("Eval 7: " + (0 == answerx1 > 5) || (0 == answery1 > 5));
          answery2 = answery;
          answerx2 = answerx1 + 1;
          if(answerx2 > 5){
            answerx2= answerx-2;
          }
          console.log("boat C " + answerx2 + ' ' + answery2);

          loop = false;
          console.log('valid position');
      } else{
          answerx1= answerx;
          answery1= answery;
          console.log('valid position');
      }

    }else if(x==2){
      answerx1= answerx - 1;
      answery1= answery;
      console.log("boat A " + answerx + ' ' + answery);
      console.log("boat B " + answerx1 + ' ' + answery1);
      if( (0 == answerx1 > 5) || (0 == answery1 > 5) ){
        console.log(x);
        console.log("Eval 1: " + (0 == answerx1) );
        console.log("Eval 2: " + (answerx1 > 5) );
        console.log("Eval 3: " + (0 == answery1) );
        console.log("Eval 4: " + (answery1 > 5) );
        console.log("Eval 5: " + (0 == answerx1 > 5));
        console.log("Eval 6: " + (0 == answery1 > 5));
        console.log("Eval 7: " + (0 == answerx1 > 5) || (0 == answery1 > 5));
        answery2 = answery;
        answerx2 = answerx1 - 1;
        if(answerx2 == 0){
           answerx2= answerx+2;
          }
          console.log("boat C " + answerx2 + ' ' + answery2);


        console.log('valid position');
        loop = false;
      } else{
        answerx1= answerx;
        answery1= answery;
        console.log('invalid position');
      }
    }else if(x==3){
      answerx1= answerx;
      answery1= answery + 1;
      console.log("boat A " + answerx + ' ' + answery);
      console.log("boat B " + answerx1 + ' ' + answery1);
      if( (0 == answerx1 > 5) || (0 == answery1 > 5) ){
        console.log(x);
        console.log("Eval 1: " + (0 == answerx1) );
        console.log("Eval 2: " + (answerx1 > 5) );
        console.log("Eval 3: " + (0 == answery1) );
        console.log("Eval 4: " + (answery1 > 5) );
        console.log("Eval 5: " + (0 == answerx1 > 5));
        console.log("Eval 6: " + (0 == answery1 > 5));
        console.log("Eval 7: " + (0 == answerx1 > 5) || (0 == answery1 > 5));
        answery2 = answery1 + 1;
        answerx2 = answerx1;
        if(answery2 > 5){
           answery2= answery-2;
          }
          console.log("boat C " + answerx2 + ' ' + answery2);


        console.log('valid position');
        loop = false;
      } else{
        console.log('invalid position');
        answerx1= answerx;
        answery1= answery;
        loop = false;
      }
    }else{
      answerx1= answerx;
      answery1= answery - 1;
      console.log("boat A " + answerx + ' ' + answery);
      console.log("boat B " + answerx1 + ' ' + answery1);
      if( (0 == answerx1 > 5) || (0 == answery1 > 5) ){
        console.log(x);
        console.log("Eval 1: " + (0 == answerx1) );
        console.log("Eval 2: " + (answerx1 > 5) );
        console.log("Eval 3: " + (0 == answery1) );
        console.log("Eval 4: " + (answery1 > 5) );
        console.log("Eval 5: " + (0 == answerx1 > 5));
        console.log("Eval 6: " + (0 == answery1 > 5));
        console.log("Eval 7: " + (0 == answerx1 > 5) || (0 == answery1 > 5));

        answery2 = answery1 - 1;
        answerx2 = answerx1;
        if(answery2 == 0){
           answery2= answery+ 2;
          }
          console.log("boat C " + answerx2 + ' ' + answery2);


        loop = false;
        console.log('valid position');

        **/