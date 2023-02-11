/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
 * each array item is an object containing individual quotes and properties related to the quote 
***/

let quotes = [
  {
    quote: "You Either Die A Hero Or Live Long Enough To See Yourself Become The Villain.",
    source: 'Harvey Dent'
  },
  {
    quote: "It's Not Who I Am Underneath, But What I Do That Defines Me.",
    source: 'Batman',
    year: '2005'

  },
  {
    quote: 'With Great Power, Comes Great Responsibility.',
    source: 'Uncle Ben',
    citation: 'Spider-Man',
    tags: 'Marvel'
  },
  {
    quote: "You are much stronger than you think you are.",
    source: 'Superman',
  },
  {
    quote: 'If you are good at something, never do it for free.',
    source: 'The Joker',
  },
];

/***
 * `getRandomQuote` function
 * param array is an array of objects
 * function accepts and returns a random index from the input array
***/

function getRandomQuote (array) {
  let randomNumber = Math.floor(Math.random() * array.length); 
  return array[randomNumber];
}

/***
 * `getRandomColor` function
 * returns random hexadecimal value
 * CREDIT: Chris Coyer (https://css-tricks.com/snippets/javascript/random-hex-color/)
 */

function getRandomColor () {
  var randomColor = Math.floor(Math.random()*16777215).toString(16);
  return '#' + randomColor;
}

/***
 * `printQuote` function
 * uses the getRandomQuote function to select quote
 * updates the html with the selected quote property values
 * uses the getRandomColor function to change the background color
***/

function printQuote () {
  let randomQuote = getRandomQuote(quotes);

  console.log(randomQuote['quote']);
  console.log(randomQuote['source']);
  console.log(randomQuote['citation']);
  console.log(randomQuote['year']);

  let printedQuote = `
  <p class="quote">${randomQuote['quote']}</p>
  <p class="source">${randomQuote['source']}
  `;

  if (randomQuote.citation) {
    printedQuote += `<span class="citation">${randomQuote['citation']}</span>`;
  }
  
  if (randomQuote.year) {
    printedQuote += `<span class="year">${randomQuote['year']}</span>`;
  }

  if (randomQuote.tags) {
    printedQuote += `<span class="year">${randomQuote['tags']}</span>`;
  }

  printedQuote += "</p>"
  
  console.log(printedQuote);

  document.getElementById('quote-box').innerHTML = printedQuote;

  document.querySelector('body').style.backgroundColor = getRandomColor();

}

//method to call printQuote function and refresh quote and color every 10 seconds 
setInterval(printQuote, 10000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

