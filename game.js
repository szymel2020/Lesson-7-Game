//tworzenie funkcji anonimowej przypisanej do zmiennej 'wybieranie'

const wybieranie = function () {
	// utworzenie tablicy
	var tablica = ['C', 'Y', 'B', ];
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
	};
}
const kulka = document.querySelector("#numer");
kulka.addEventListener("click", wybieranie, bingo);

// funkcja losowania litery dla 'kulki1'

const wybieranie1 = function () {

	var tablica = ['A', 'E', 'O'];
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
	};

}

const kulka1 = document.querySelector("#numer1");
kulka1.addEventListener("click", wybieranie1, bingo);


// funkcja losowania litery dla 'kulki2'
const wybieranie2 = function () {

	var tablica = ['X', 'S', 'T'];
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
	};

}
const kulka2 = document.querySelector("#numer2");
kulka2.addEventListener("click", wybieranie2, bingo);




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
var bingo = function () {
	if(numer.style.backgroundColor = "red") {
		document.getElementById('name').innerHTML = 'win';
	};
};
// funkcja wygrania losowania




// koniec funkcji wygrania losowania
