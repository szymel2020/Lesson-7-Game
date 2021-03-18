//tworzenie funkcji anonimowej przypisanej do zmiennej 'wybieranie'

const wybieranie = function () {
	// utworzenie tablicy
	var tablica = ['C', 'Y', 'B','T' ];
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
	
}
const kulka = document.querySelector("#numer");
kulka.addEventListener("click", wybieranie)


// funkcja losowania litery dla 'kulki1'

const wybieranie1 = function () {

	var tablica = ['A', 'E', 'O', 'W'];
	var tgu = document.getElementById("numer1").innerHTML = tablica[Math.random() * tablica.length << 0];
	if (tgu == 'O') {
		document.getElementById('numer1').style.backgroundColor = 'red';
		document.getElementById('numer1').style.color = 'white';
	} else if (tgu == 'A') {
		document.getElementById('numer1').style.backgroundColor = 'yellow';
		document.getElementById('numer1').style.color = 'black';
	} else if (tgu == 'E') {
		document.getElementById('numer1').style.backgroundColor = 'black';
		document.getElementById('numer1').style.color = 'orange';
	} else if (tgu == 'W') {
		document.getElementById('numer1').style.backgroundColor = 'green';
		document.getElementById('numer1').style.color = 'red';
	};

}

const kulka1 = document.querySelector("#numer1");
kulka1.addEventListener("click", wybieranie1);


// funkcja losowania litery dla 'kulki2'
const wybieranie2 = function () {

	var tablica = ['X', 'S', 'T', 'O'];
	var tgu = document.getElementById("numer2").innerHTML = tablica[Math.random() * tablica.length << 0];
	if (tgu == 'X') {
		document.getElementById('numer2').style.backgroundColor = 'red';
		document.getElementById('numer2').style.color = 'white';
	} else if (tgu == 'T') {
		document.getElementById('numer2').style.backgroundColor = 'yellow';
		document.getElementById('numer2').style.color = 'black';
	} else if (tgu == 'S') {
		document.getElementById('numer2').style.backgroundColor = 'black';
		document.getElementById('numer2').style.color = 'orange';
	} else if (tgu == 'O') {
		document.getElementById('numer2').style.backgroundColor = 'green';
		document.getElementById('numer2').style.color = 'red';
	};

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
/*const winner = function() {
	if(kulka.value ==  "B" &&  kulka1.value ==  "O" &&  kulka2.value =="X") {
		document.getElementById("win2").innerHTML = "4";
	}
}
var op = document.getElementById('op');
if(op.value > ""){
	document.write("op.value");
}*/

// koniec funkcji wygrania losowania
