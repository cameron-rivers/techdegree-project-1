/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

let quotes = [
  {
    quote: "The truth is like the sun. You can shut it out for a time, but it ain't goin' away.",
    source: 'Elvis Presley'
  },
  {
    quote: 'The beautiful thing about learning is that nobody can take it away from you.',
    source: 'BB King'
  },
  {
    quote: 'One good thing about music, when it hits you, you feel no pain.',
    source: 'Bob Marley'
  },
  {
    quote: "Life is what happens when you’re making other plans.",
    source: 'John Lennon',
  },
  {
    quote: 'Just as Jesus created wine from water, we humans are capable of transmuting emotion into music.',
    source: 'Carlos Santana',
  },
];


/***
 * `getRandomQuote` function
***/
function getRandomQuote (array) {
  let randomNumber = Math.floor(Math.random() * array.length); 
  //console.log(array[randomNumber]);
  return array[randomNumber];
}

//getRandomQuote(quotes);


/***
 * `printQuote` function
***/
function printQuote (array) {
  let randomQuote = getRandomQuote(array);
  //console.log(quote);
  let printedQuote = document.querySelector(".quote");
  printedQuote.innerHTML = randomQuote.quote;
}

printQuote(quotes);


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);


