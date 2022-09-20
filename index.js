let firstCard = getRandomCard();
let secondCard = getRandomCard();
let hasBlackjack = true;
let isAlive = true;
let player ={
	name:"milos",
	chip: 150
};

let cards = [firstCard, secondCard];

let sum =firstCard + secondCard;

let mesage = "";

function startGame(){
	if(sum<21){
		mesage = "wanna another card?";
	}else if(sum===21){
		mesage= "You won!";
		hasBlackjack = true;
	}else{
		mesage="you lose!";
		isAlive= false;
	}
	document.getElementById("msg").textContent = mesage;
	document.getElementById("sumEl").textContent = "Sum : " + sum;
	document.querySelector("#cards").textContent = "Cards: " + cards;
};

function newCard(){
  if(hasBlackjack === false || isAlive === true){
	let card = getRandomCard();
	cards.push(card);
    sum += card;
    startGame();
	document.getElementById("msg").textContent = mesage;
	document.getElementById("sumEl").textContent = "Sum : " + sum;
	document.querySelector("#cards").textContent = "Cards: " + cards;
    }else{
    	document.getElementById("msg").textContent = "sorry, you can't get any more cards!";
    }};

function getRandomCard(){
	let number = Math.floor(Math.random()*13 + 1);
	if (number===1){
		return 11;
	}else if(number>=11 && number<= 14){
        return 10;
	}else{
		return number
	}};

	document.querySelector("#player-el").textContent = player.name + " :" + " " +player.chip + " $";


