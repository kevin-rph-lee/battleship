
var answerx = 0;
var answery = 0;
var answerx1 = 0;
var answery1 = 0;
var answerx2 = 0;
var answery2 = 0;
var grid = [];

var answerx3 = 0;
var answery3 = 0;
var answerx4 = 0;
var answery4 = 0;

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


function placeBoat1(){

  var loop = true;
  var grid = [];
  answerx = parseInt((Math.random() * (5 - 1 + 1)), 10) + 1;
  answery = parseInt((Math.random() * (5 - 1 + 1)), 10) + 1;
  while(loop == true){
    x = parseInt((Math.random() * (4 - 1 + 1)), 10) + 1;


    if(x==1){
      answerx1= answerx + 1;
      answery1= answery;

      if( (0 == answerx1) || (answerx1 > 5) || (0 == answery1) || (answery1 > 5) ){

          answerx1= answerx;
          answery1= answery;


      } else{
        answery2=answery;
        if((answerx1+1 > 5)){
          answerx2 = answerx - 1;
        } else{
          answerx2 = answerx1 +1;
        }



          loop = false;
      }

    }else if(x==2){
      answerx1= answerx - 1;
      answery1= answery;


      if( (0 == answerx1) || (answerx1 > 5) || (0 == answery1) || (answery1 > 5) ){

        answerx1= answerx;
        answery1= answery;


      } else{
        //////////////////////
        answery2=answery;
        if((answerx1-1 == 0)){
          answerx2 = answerx + 1;
        }else{
          answerx2 = answerx1 -1;
        }


        loop = false;
      }
    }else if(x==3){
      answerx1= answerx;
      answery1= answery + 1;


      if( (0 == answerx1) || (answerx1 > 5) || (0 == answery1) || (answery1 > 5) ){


        answerx1= answerx;
        answery1= answery;

      } else{

        answerx2=answerx;
        if((answery1+1 > 5)){
          answery2 = answery-1;
        } else{
          answery2 = answery1 +1;
        }

        loop = false;
      }
    }else if (x==4){
      answerx1= answerx;
      answery1= answery - 1;

      if( (0 == answerx1) || (answerx1 > 5) || (0 == answery1) || (answery1 > 5) ){
        answerx1= answerx;
        answery1= answery;
      } else{
        answerx2=answerx;
        if((answery1-1 < 1)){
          answery2 = answery + 1;
        }else{
          answery2 = answery1-1;
        }

        loop = false;

      }
    } else{
      console.log("Error!");
    }
  }

  placeBoat2();




}


function placeBoat2(){
  var loop = true;
  var x = 0
  grid = [];
  grid.push([answerx,answery]);
  grid.push([answerx1,answery1]);
  grid.push([answerx2,answery2])

  answerx3= 0;
  answery3= 0;
  answerx4= 0;
  answery4= 0;

  while(loop == true){

    answerx3 = parseInt((Math.random() * (5 - 1 + 1)), 10) + 1;
    answery3 = parseInt((Math.random() * (5 - 1 + 1)), 10) + 1;
    if(checkBoat(answerx3,answery3)==true){
      break;
    }
  }





  while(loop == true){

    x = parseInt((Math.random() * (4 - 1 + 1)), 10) + 1;


    console.log("Test A: " +answerx + " " + answery);
    console.log("Test B: " +answerx1 + " " + answery1);
    console.log("Test C: " +answerx2 + " " + answery2);
    console.log("Test D: " +answerx3 + " " + answery3);
    console.log("Test E: " +answerx4 + " " + answery4);
    console.log(loop);

    if(x==1){
      console.log(x);
      answerx4= answerx3 + 1;
      answery4= answery3;
      if( (0 == answerx4) || (answerx4 > 5) || (0 == answery4) || (answery4 > 5) ){
        console.log('invalid 1');
          answerx4= answerx3;
          answery4= answery3;
      } else {
        if(checkBoat(answerx4,answery4)==true){
          console.log("Boat D: " + answerx3 + ' '+ answery3);
          console.log("Boat E: " + answerx4 + ' '+ answery4);
          loop =false;
          console.log("turned false!");
        }
      }
    }
    if(x==2){
      console.log(x);
      answerx4= answerx3 - 1;
      answery4= answery3;
      if( (0 == answerx4) || (answerx4 > 5) || (0 == answery4) || (answery4 > 5) ){
        console.log('invalid 2');
          answerx4= answerx3;
          answery4= answery3;
      } else{
        if(checkBoat(answerx4,answery4)==true){
          console.log("Boat D: " + answerx3 + ' '+ answery3);
          console.log("Boat E: " + answerx4 + ' '+ answery4);
          loop =false;
          console.log("turned false!");
        }
      }
    }
    if(x==3){
      console.log(x);
      answerx4= answerx3;
      answery4= answery3 + 1;
      if( (0 == answerx4) || (answerx4 > 5) || (0 == answery4) || (answery4 > 5) ){
        console.log('invalid 3');
          answerx4= answerx3;
          answery4= answery3;
      } else{
        if(checkBoat(answerx4,answery4)==true){
          console.log("Boat D: " + answerx3 + ' '+ answery3);
          console.log("Boat E: " + answerx4 + ' '+ answery4);
          loop =false;
          console.log("turned false!");
        }
      }
    }
    if(x==4){
      console.log(x);
      answerx4= answerx3;
      answery4= answery3 - 1;
      if( (0 == answerx4) || (answerx4 > 5) || (0 == answery4) || (answery4 > 5) ){
        console.log('invalid 4');
         answerx4= answerx3;
         answery4= answerx3;
       }else{
        if(checkBoat(answerx4,answery4)==true){
          console.log("Boat D: " + answerx3 + ' '+ answery3);
          console.log("Boat E: " + answerx4 + ' '+ answery4);
          loop =false;
          console.log("turned false!");

        }
      }
    }
  }

}

function checkBoat(x,y){
  console.log("checking boat... " + x + ' ' + y);
  var boat = [x,y];
  console.log("Grid : " + grid[0] + " " + grid[1] + ' ' + grid[2] + " length: " + grid.length);
  for(var i= 0; i < grid.length; i ++){
    console.log("Checking: " + boat.toString() + " to " + grid[i].toString());
    if(boat.toString()==grid[i].toString()) {

      console.log("boat checker false!");
      return false;
    }
  }
  console.log("boat checker true!");
  return true;
}


