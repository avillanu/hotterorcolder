var count=0;
var best=0;
var thenumber = Math.floor((Math.random()*10)+1); 
var difference = 10;
document.getElementById('message').innerHTML = difference;
document.getElementById('button').onclick = function () { alert('onclick!'); };

function doFunction(){
thenumber = Math.floor((Math.random()*10)+1); 	
difference = 10	
document.getElementById('message').innerHTML = 'Number is reset';

};

function testResults (form) {
    var TestVar = form.inputbox.value;
    if (TestVar-thenumber===0) 
{
	document.getElementById('message').innerHTML ='Congratulations, that was the number!' ;
	difference = 0;}

	else if (TestVar > 10) {
	document.getElementById('message').innerHTML ='Number cannot be greater than 10' ;
	
	}

	else if (TestVar < 1) {
	document.getElementById('message').innerHTML ='Number cannot be less than 1' ;
	}

	else if (Math.abs(TestVar - thenumber) > difference){
  	document.getElementById('message').innerHTML ='Colder' ;
	difference = Math.abs(TestVar - thenumber);	
	}	
	else if (Math.abs(TestVar - thenumber) < difference)
	{ document.getElementById('message').innerHTML ='Hotter' ;
    difference = Math.abs(TestVar - thenumber);
	}




};


