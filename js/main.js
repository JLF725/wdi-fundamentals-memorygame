console.log("Up and running!");

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

console.log("User flipped " + cardOne);
console.log("User flipped " + cardThree);

// UNIT 8 ASSIGNMENT //

/* 2. Create an array to store the four cards. */

var cards = ["queen", "queen", "king", "king"]

/* 3. Create an empty array, which will eventually hold the cards that are in play. */

var cardsInPlay = []

/* 4. Create a variable to represent the first card that the user flipped. */

var cardOne = cards[0];

/* 5. Add this first card to the cardsInPlay array. */

cardsInPlay.push(cardOne);

/* 6. For testing purposes, it will be helpful to display the card that was just flipped to the console to make sure we've done things correctly. */

console.log("User flipped queen");

/* 7. Create a variable to represent the second card that the user flipped. */

var cardTwo = cards[3];

/* 8.  Add this second card to the cardsInPlay array. */

cardsInPlay.push(cardTwo);

/* 9. Use console.log() to display the card that the user flipped. */

console.log("User flipped king");

/* 10. Add logic to check to see if two cards have been played, because in our final game we will not want to check for a match until the user has selected two cards. */

if (cardsInPlay.length === 2) {
	result = "yes";
} else {
	result = "no";
}

console.log (result);

/* 11. Now add logic that checks for equality between the two cards in the cardsInPlay array.
12. If values are equal, execute an alert with the message '"You found a match!"
13. If values are not equal, execute an alert with the message "Sorry, try again."
*/

if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!");
} else {
	alert("Sorry, try again.");
}


/* UNIT 9 ASSIGNMENT */

/* 2. Create a function to store all steps that should happen when a user flips a card. */

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
	} else {
		console.log("Sorry, try again.")
	}
};

var flipCard = function(cardId) {

	cardId(0);

	cardId(2);

	var cardsInPlay = [];
}

console.log ("User flipped " + cards[cardId]);

	if (cardsInPlay.length === 2) {
		result = "yes";
	} else {
		result = "no";
	}
	console.log (result);

	checkForMatch();

	cardsInPlay.push(cards[cardId]);

