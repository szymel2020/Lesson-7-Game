//tworzenie funkcji anonimowej przypisanej do zmiennej 'wybieranie'
const wybieranie = function() {
	// utworzenie tablicy
	var tablica = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L','Z', 'X', 'C', 'V', 'B', 'N', 'M', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U','I', 'O', 'P'];
	document.getElementById("numer").innerHTML = tablica[Math.random() * tablica.length <<0];
	
	//dodanie elementu 'div' do body
	
}
function won(){
	const kulka = document.querySelector("#numer");
	if( kulka.value == 'A', 'Z','C','F','R','T'){
		document.getElementById('body').style.backgroundImage = "url(https://cdn.pixabay.com/photo/2016/02/06/13/42/winner-1182937_1280.png)";
	}
}
const kulka = document.querySelector("#numer");
kulka.addEventListener("click", wybieranie);

const wybieranie1 = function() {
	//utworzenie elementu 'div'
	
	var tablica = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L','Z', 'X', 'C', 'V', 'B', 'N', 'M', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U','I', 'O', 'P'];
	document.getElementById("numer1").innerHTML = tablica[Math.random() * tablica.length <<0];
	//dodanie elementu 'div' do body
	
}

const kulka1 = document.querySelector("#numer1");
kulka1.addEventListener("click", wybieranie1);

const wybieranie2 = function() {
	//utworzenie elementu 'div'
	
	var tablica = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L','Z', 'X', 'C', 'V', 'B', 'N', 'M', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U','I', 'O', 'P'];
	document.getElementById("numer2").innerHTML = tablica[Math.random() * tablica.length <<0];
	//dodanie elementu 'div' do body
	
}
const kulka2 = document.querySelector("#numer2");
kulka2.addEventListener("click", wybieranie2);




const losowanie = function() {
	
	var tablica2 = ['cat', 'dog', 'yes', 'two', 'box'];
	document.getElementById("words").innerHTML = tablica2[Math.random() * tablica2.length <<0];
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

button.addEventListener("click", function() {
	
	document.getElementById("name").innerHTML = textbox.value;

	textbox.value = "";
});



	
				
