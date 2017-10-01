
var answerx = parseInt((Math.random() * (3 - 1 + 1)), 10) + 1;
var answery = parseInt((Math.random() * (3 - 1 + 1)), 10) + 1;
var answer = [answerx, answery];
var game = true;
console.log(answerx + ' ' + answery);



function selectSpace(x,y){
  if(x== answerx && y==answery){
    console.log('hit!');
    $('.grid'+x+y).addClass('buttonHit');
    $('.grid'+x+y).removeClass('buttonunknown');
  } else{
    console.log('missed!');
    $('.grid'+x+y).addClass('buttonMissed');
    $('.grid'+x+y).removeClass('buttonunknown');
  }

}

function reset(){
  $('[class^="grid"]').removeClass('buttonunknown');
  $('[class^="grid"]').removeClass('buttonMissed');
  $('[class^="grid"]').removeClass('buttonHit');
  $('[class^="grid"]').addClass('buttonunknown');
  answerx = parseInt((Math.random() * (3 - 1 + 1)), 10) + 1;
  answery = parseInt((Math.random() * (3 - 1 + 1)), 10) + 1;
}


$(document).ready(function(){
  $('#button11').on('click', function(){
    if(answerx==1 && answery==1){
      alert('test')
    }
  });

});