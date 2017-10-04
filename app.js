
var answerx = 0;
var answery = 0;
var answerx1 = 0;
var answery1 = 0;
var answerx2 = 0;
var answery2 = 0;


var answerx3 = 0;
var answery3 = 0;
var answerx4 = 0;
var answery4 = 0;

var turns = 5;
var gameWinCounter= 0;
var gameLossCounter= 0;
var keepGoing = true;

var hits = 0;









function selectSpace(x,y){
  if(($('#grid'+x+y).data('isHit')==true)){
    console.log("alreay hit!");
  }else if(    (x== answerx && y==answery) || (x== answerx1 && y==answery1) || (x== answerx2 && y==answery2) || (x== answerx3 && y==answery3) || (x== answerx4 && y==answery4)){
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
  placeBoat1();
  turns = 5;
  hits = 0;
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
    if(hits == 5){
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

placeBoat1();


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

      if( checkBoatBoundaries(answerx1, answery1) ){

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


      if( checkBoatBoundaries(answerx1, answery1)  ){

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


      if( checkBoatBoundaries(answerx1, answery1)  ){


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

      if( checkBoatBoundaries(answerx1, answery1)  ){
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


  console.log("Boat A :" + answerx + " " + answery);
  console.log("Boat B :" + answerx1 + " " + answery1);
  console.log("Boat C :" + answerx2 + " " + answery2);
  console.log("Boat D :" + answerx3 + " " + answery3);
  console.log("Boat E :" + answerx4 + " " + answery4);
}


function placeBoat2(){
  var loop = true;
  var x = 0


  answerx3= 0;
  answery3= 0;
  answerx4= 0;
  answery4= 0;

  while(loop == true){

    answerx3 = parseInt((Math.random() * (5 - 1 + 1)), 10) + 1;
    answery3 = parseInt((Math.random() * (5 - 1 + 1)), 10) + 1;
    if(validateSpace(answerx3,answery3)==true){
      break;
    }
  }





  while(loop == true){

    x = parseInt((Math.random() * (4 - 1 + 1)), 10) + 1;



    if(x==1){

      answerx4= answerx3 + 1;
      answery4= answery3;
      if( checkBoatBoundaries(answerx4, answery4)  ){
          answerx4= answerx3;
          answery4= answery3;
      } else {
        if(validateSpace(answerx4,answery4)==true){
          loop =false;
        }
      }
    }
    if(x==2){
      console.log(x);
      answerx4= answerx3 - 1;
      answery4= answery3;
      if( checkBoatBoundaries(answerx4, answery4)  ){

          answerx4= answerx3;
          answery4= answery3;
      } else{
        if(validateSpace(answerx4,answery4)==true){
          loop =false;
        }
      }
    }
    if(x==3){
      console.log(x);
      answerx4= answerx3;
      answery4= answery3 + 1;
      if( checkBoatBoundaries(answerx4, answery4)  ){

          answerx4= answerx3;
          answery4= answery3;
      } else{
        if(validateSpace(answerx4,answery4)==true){

          loop =false;

        }
      }
    }
    if(x==4){
      console.log(x);
      answerx4= answerx3;
      answery4= answery3 - 1;
      if( checkBoatBoundaries(answerx4, answery4)  ){

         answerx4= answerx3;
         answery4= answerx3;
       }else{
        if(validateSpace(answerx4,answery4)==true){

          loop =false;


        }
      }
    }
  }

}

function validateSpace(x,y){

  var boat = [x,y];
  var grid = [];
  grid.push([answerx,answery]);
  grid.push([answerx1,answery1]);
  grid.push([answerx2,answery2])

  for(var i= 0; i < grid.length; i ++){
    console.log("Checking: " + boat.toString() + " to " + grid[i].toString());
    if( (boat.toString()==grid[i].toString())) {


      return false;
    }
  }

  return true;
}

function checkBoatBoundaries(x,y){
  if(((0 == x) || (x > 5) || (0 == y) || (y > 5))){

    return true;
  }
  else{
    return false;
  }

}
