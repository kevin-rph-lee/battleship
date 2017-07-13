var answerx = parseInt((Math.random() * (3 - 1 + 1)), 10) + 1;
var answery = parseInt((Math.random() * (3 - 1 + 1)), 10) + 1;
var answer = [answerx, answery];
//parseInt((Math.random() * (max - min + 1)), 10) + min;

console.log(answer)

function alertName(){
	//Grabs text from name textbox and returns it
		var test = document.getElementById('input').value;
		alert('Hello ' + test);

}


function acknowledgeMessage(){
        //acknowledges the button click by adding a paragraph to the html file
        var acknowledge = $('<p> Button clicked</p>');
        $('.test').append(acknowledge);
}


function userSelect(x,y){
        if ((x == answer[0]) && (y== answer[1]){
			$('.test').append('<p>You win!</p>');
		} else{
			$('.test').append('<p>You lose!</p>');
		}
}

