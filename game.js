//tworzenie funkcji anonimowej przypisanej do zmiennej 'wybieranie'

const wybieranie = function () {
	// utworzenie tablicy
	var tablica = ['C', 'Y', 'B', 'T'];
	var tgu = document.getElementById("numer").innerHTML = tablica[Math.random() * tablica.length << 0];
	if (tgu == 'B') {
		document.getElementById('numer').style.backgroundColor = 'red';
		document.getElementById('numer').style.color = 'white';

		//dodanie elementu 'div' do body
	} else if (tgu == 'C') {
		document.getElementById('numer').style.backgroundColor = 'yellow';
		document.getElementById('numer').style.color = 'black';

	} else if (tgu == 'Y') {
		document.getElementById('numer').style.backgroundColor = 'black';
		document.getElementById('numer').style.color = 'orange';

	} else if (tgu == 'T') {
		document.getElementById('numer').style.backgroundColor = 'green';
		document.getElementById('numer').style.color = 'red';
	};
	var win2 = document.getElementById("win2");
	switch (tgu) {
		case "B":
			document.getElementById("win2").innerHTML = " 4";
			win2.style.color = "red";
			break;
		case "C":
			document.getElementById("win2").innerHTML = " 2";
			win2.style.color = "yellow";
			break;
		case "Y":
			document.getElementById("win2").innerHTML = " 6";
			win2.style.color = "black";
			break;
		case "T":
			document.getElementById("win2").innerHTML = " 8";
			win2.style.color = "green";
			break;
	}
}
const kulka = document.querySelector("#numer");
kulka.addEventListener("click", wybieranie)
kulka.addEventListener("touchstart", wybieranie)


// funkcja losowania litery dla 'kulki1'

const wybieranie1 = function () {

	var tablica = ['A', 'E', 'O', 'W'];
	var tgu1 = document.getElementById("numer1").innerHTML = tablica[Math.random() * tablica.length << 0];
	if (tgu1 == 'O') {
		document.getElementById('numer1').style.backgroundColor = 'red';
		document.getElementById('numer1').style.color = 'white';
	} else if (tgu1 == 'A') {
		document.getElementById('numer1').style.backgroundColor = 'yellow';
		document.getElementById('numer1').style.color = 'black';
	} else if (tgu1 == 'E') {
		document.getElementById('numer1').style.backgroundColor = 'black';
		document.getElementById('numer1').style.color = 'orange';
	} else if (tgu1 == 'W') {
		document.getElementById('numer1').style.backgroundColor = 'green';
		document.getElementById('numer1').style.color = 'red';
	};
	var win3 = document.getElementById("win3");
	switch (tgu1) {
		case "O":
			document.getElementById("win3").innerHTML = " 4";
			win3.style.color = "red";
			break;
		case "A":
			document.getElementById("win3").innerHTML = " 2";
			win3.style.color = "yellow";
			break;
		case "E":
			document.getElementById("win3").innerHTML = " 6";
			win3.style.color = "black";
			break;
		case "W":
			document.getElementById("win3").innerHTML = " 8";
			win3.style.color = "green";
			break;
	}
}

const kulka1 = document.querySelector("#numer1");
kulka1.addEventListener("click", wybieranie1);


// funkcja losowania litery dla 'kulki2'
const wybieranie2 = function () {

	var tablica = ['X', 'S', 'T', 'O'];
	var tgu2 = document.getElementById("numer2").innerHTML = tablica[Math.random() * tablica.length << 0];
	if (tgu2 == 'X') {
		document.getElementById('numer2').style.backgroundColor = 'red';
		document.getElementById('numer2').style.color = 'white';
	} else if (tgu2 == 'T') {
		document.getElementById('numer2').style.backgroundColor = 'yellow';
		document.getElementById('numer2').style.color = 'black';
	} else if (tgu2 == 'S') {
		document.getElementById('numer2').style.backgroundColor = 'black';
		document.getElementById('numer2').style.color = 'orange';
	} else if (tgu2 == 'O') {
		document.getElementById('numer2').style.backgroundColor = 'green';
		document.getElementById('numer2').style.color = 'red';
	};
	var win4 = document.getElementById("win4");
	switch (tgu2) {
		case "X":
			document.getElementById("win4").innerHTML = " 4";
			win4.style.color = "red";
			break;
		case "T":
			document.getElementById("win4").innerHTML = " 2";
			win4.style.color = "yellow";
			break;
		case "S":
			document.getElementById("win4").innerHTML = " 6";
			win4.style.color = "black";
			break;
		case "O":
			document.getElementById("win4").innerHTML = " 8";
			win4.style.color = "green";
			break;
	}
}
const kulka2 = document.querySelector("#numer2");
kulka2.addEventListener("click", wybieranie2);




const losowanie = function () {

	var tablica2 = ['cat', 'dog', 'yes', 'two', 'box'];
	document.getElementById("words").innerHTML = tablica2[Math.random() * tablica2.length << 0];
}
//wywołanie funkcji 'losowanie'
//losowanie()
// pobranie elementu
const button1 = document.querySelector(".firstButton");
//nasłuchiwanie - metoda z argumentem 'click' i funkcja 'losowanie', po kliknięciu nastąpi wywołanie funkcji 'losowanie'
button1.addEventListener("click", losowanie);


var messages = document.getElementById("messages");
var textbox = document.getElementById("textbox");
var button = document.getElementById("button7");

button.addEventListener("click", function () {

	document.getElementById("name").innerHTML = textbox.value;

	textbox.value = "";
});
// funkcja wygrania losowania

// funkcja wygrania losowania
/*if(kulka == 'B'  && kulka1 == 'O'   && kulka2 == 'X' ) {
	document.getElementById("win2").innerHTML = "4";
}else if(kulka.style.backgroundColor == 'yellow' ) {
	document.getElementById("win2").innerHTML = "6";
} else if(kulka.style.backgroundColor == 'black' ) {
	document.getElementById("win2").innerHTML = "3";
}else if(kulka.style.backgroundColor == 'green' ) {
	document.getElementById("win2").innerHTML = "1";
};*/

// koniec funkcji wygrania losowania

var win2 = document.getElementById("win2").value;
var win3 = document.getElementById("win3").value;
var win4 = document.getElementById("win4").value;
var win1 = document.getElementById("#win1");


var win = document.getElementById("win");
win.addEventListener("click", bingo);

function bingo() {
	var sum1 = document.getElementById("sum1");
	var sum2 = document.getElementById("sum2");
	var sum3 = document.getElementById("sum3");
	var sum4 = document.getElementById("sum4");
	var a = document.getElementById("a");

	/*if(kulka.style.backgroundColor ==  kulka1.style.backgroundColor && kulka.style.backgroundColor  == kulka2.style.backgroundColor  )*/
	if (kulka.style.backgroundColor == "red" && kulka1.style.backgroundColor == "red" && kulka2.style.backgroundColor == "red") {
		var sum = 4 + 4 + 4;
		document.getElementById('win1').innerHTML = sum;
		var a3 = document.getElementById('a3');
		var plusButton = document.getElementById("plusButton");
		plusButton.addEventListener("click", function ()

			{
				document.getElementById("sum1").innerHTML = sum;
				document.getElementById('sum1').style.color = "red";
				document.getElementById('a3').innerHTML = "n";
				document.getElementById('win1').innerHTML = "";
			});

	} else if (kulka.style.backgroundColor == "yellow" && kulka1.style.backgroundColor == "yellow" && kulka2.style.backgroundColor == "yellow") {
		var sum = 2 + 2 + 2;
		document.getElementById('win1').innerHTML = sum;
		var plusButton = document.getElementById("plusButton");
		plusButton.addEventListener("click", function ()

			{

				document.getElementById("sum2").innerHTML = sum;
				document.getElementById("sum2").style.color = "yellow";
				document.getElementById('win1').innerHTML = "";
			});
	} else if (kulka.style.backgroundColor == "green" && kulka1.style.backgroundColor == "green" && kulka2.style.backgroundColor == "green") {
		var sum = 8 + 8 + 8;
		document.getElementById('win1').innerHTML = sum;
		var a1 = document.getElementById('a1');
		var plusButton = document.getElementById("plusButton");
		plusButton.addEventListener("click", function () {

			document.getElementById("sum3").innerHTML = sum;
			document.getElementById('a1').innerHTML = "w";
			document.getElementById("sum3").style.color = "green";
			document.getElementById('win1').innerHTML = "";
		});
	} else if (kulka.style.backgroundColor == "black" && kulka1.style.backgroundColor == "black" && kulka2.style.backgroundColor == "black") {
		var sum = 6 + 6 + 6;
		document.getElementById('win1').innerHTML = sum;
		var plusButton = document.getElementById("plusButton");
		plusButton.addEventListener("click", function () {

			document.getElementById("sum4").innerHTML = sum;
			document.getElementById("sum4").style.color = "black";
			document.getElementById('win1').innerHTML = "";

		});
	} else if (kulka.style.backgroundColor != "black" || kulka1.style.backgroundColor != "black" || kulka2.style.backgroundColor != "black") {

		document.getElementById('win1').innerHTML = "";
	}

};


/*if(kulka.style.backgroundColor == "red" && kulka1.style.backgroundColor == "red" && kulka2.style.backgroundColor == "red" )*/


		//var win1 = document.getElementById("54");


		/*
		plusButton.addEventListener("click", function () {
			document.getElementById("sum1").innerHTML = '5';
			//win1.value = "";
		});
		*/
