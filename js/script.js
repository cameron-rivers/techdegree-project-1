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
    citation: 'Spider-Man'
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
function printQuote () {
  let randomQuote = getRandomQuote(quotes);
  //console.log(randomQuote);
  //console.log(randomQuote.quote);
  //console.log(randomQuote.source);
  //console.log(randomQuote.citation);
  //console.log(randomQuote.year);

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

  printedQuote += "</p>"

  console.log(printedQuote);
  document.getElementById('quote-box').innerHTML = printedQuote;

}

//printQuote(quotes);


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);


