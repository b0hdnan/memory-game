// захист від роботи з неіснуючими ключами
if (localStorage.getItem("winners") == null) {
	localStorage.setItem("winners", "unknown");
	localStorage.setItem("records", "50");
}
// оголошення глобальних змінних
// зчитуємо ключі
var savedNames = localStorage.getItem("winners");
var savedRecords = localStorage.getItem("records");
// проміжні масиви для запису даних
var userNames = [];
var userRecords = [];
var userRecordsNumbers = [];
// проміжні змінні для збереження поточних результатів
var userName = "";
var userRecord = "";
// рахівник cекунд
var sec = 0;
// спеціальний код таймера, за допомогою якого ми його зупинимо
var timerId = 0;
// вибір візуального елемента текст таблиці рекордів
var recordsText = document.getElementById("records");
var timer = document.getElementById("timer");
// звуки
var sound1 = new Audio();
var sound2 = new Audio();
var sound3 = new Audio();
sound1.src = "music/game.mp3";
sound2.src = "music/lose.mp3";
sound3.src = "music/win.mp3";
// додаткові масиви
var choosenCards = [];
var choosenCardsId = [];
// набрані бали
var points = 0;
// перебираємо картки
var playCards = document.querySelectorAll("div.box");
// програємо фон
sound1.play();
// масив карток
const cards = [
	{
		name: "html",
		img:
			"https://github.com/robgmerrill/img/blob/master/html5-logo.png?raw=true"
	},
	{
		name: "css",
		img: "https://github.com/robgmerrill/img/blob/master/css3-logo.png?raw=true"
	},
	{
		name: "JavaScript",
		img: "https://github.com/robgmerrill/img/blob/master/js-logo.png?raw=true"
	},
	{
		name: "python",
		img:
			"https://github.com/robgmerrill/img/blob/master/python-logo.png?raw=true"
	},
	{
		name: "sass",
		img: "https://github.com/robgmerrill/img/blob/master/sass-logo.png?raw=true"
	}
];

// функція виведення рекордів в таблицю
function recordsOutput() {
	// переходимо до масивів
	userNames = savedNames.split(",");
	userRecords = savedRecords.split(",");
	// числовий	 масив рекордів
	userRecordsNumbers = [];
	// формуємо числовий масив рекордів
	userRecords.forEach(element => {
		userRecordsNumbers.push(parseInt(element, 10));
	});
	// формується таблиця результатів рекордів
	for (let i = 0; i < userNames.length; i++) {
		recordsText.innerHTML += "<br>";
		recordsText.innerHTML += userNames[i] + " " + userRecords[i];
	}
}

recordsOutput()// виведення рекордів
for (let i = 0; i < playCards.length; i++) {
	playCards[i].setAttribute("id", i); // встановлюємо id для кожної картки
	playCards[i].addEventListener("click", function () {

		if (choosenCardsId.every(item => item !== this.id) && choosenCards.length < 2) {
			choosenCards.push(shuffleArray[this.id].name) // додаємо ім'я картки в масив вибраних карток
			choosenCardsId.push(this.id)	// додаємо Id картки в масив вибраних карток Id
			this.style.backgroundImage = `url(${shuffleArray[i].img})`; // з'являється зображення
			this.style.backgroundColor = "#eee";
		}
		// якщо в масивах дві картки...

		if (choosenCards.length === 2) {
			setTimeout(function () { // відстрочка виконання функції
				if (choosenCards[0] === choosenCards[1] && choosenCards[0] != undefined && choosenCards[1] != undefined) {
					// приховуємо картки, захист від неіснуючого елементу
					if (choosenCards[0]) playCards[choosenCardsId[0]].style.visibility = "hidden";
					if (choosenCards[1]) playCards[choosenCardsId[1]].style.visibility = "hidden";
					points++;
					sound3.play();
				}
				else {
					if (choosenCardsId[0]) playCards[choosenCardsId[0]].style.backgroundImage = "none";
					if (choosenCardsId[1]) playCards[choosenCardsId[1]].style.backgroundImage = "none";
					sound2.play();
				}
				if (choosenCards[0]) playCards[choosenCardsId[0]].style.backgroundColor = "#eee";
				if (choosenCards[1]) playCards[choosenCardsId[1]].style.backgroundColor = "#eee";
				choosenCards = [];
				choosenCardsId = [];
			}, 800)
		}

	});
}
// подвоєний масив карток і підготовлений для гри масив shuffleArray
let array = [...cards, ...cards],
	shuffleArray = array.sort(() => 0.5 - Math.random());
// ініціалізація cекундоміра
var initSec = () => timerId = setInterval(tick, 1000);
// Щосекундна функція
function tick() {
	if (points < 5) {
		sec++;
		timer.innerText = sec;
	}
	else { // кінець гри
		clearInterval(timerId) // вимкнули секундомір setTimeout
		// виводимо результати
		timer.innerText = sec + " seconds";
		console.log(userRecordsNumbers);
		// зчитування імені гравця, якиц побив хоча б один рекорд і запис його в таблицю
		if (userRecordsNumbers.some(element => element > sec)) {
			userName = prompt(); // зчитали з поля вводу
			userRecord = sec; // записали час
			savedRecords += "," + userRecord; // додали в рядок тексту
			savedNames += "," + userName; // додали в рядок тексту
			localStorage.setItem("records", savedRecords); // записали результат гравця в пам'ять браузера
			localStorage.setItem("winners", savedNames);
			recordsOutput()// виведення рекордів
		}
	}
} // кінець гри
initSec(); // запуск секундоміра




