//
// https://github.com/indaqoo
// live preview - https://indaqoo.github.io/fullstack-unit-1/
//


// quotes array with objects
  const quotes = [
    {
      quote: "First, solve the problem. Then, write the code.",
      source: "John Johnson",
      category: "Programming"
    },{
      quote: "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code.",
      source: "Christopher Thompson",
      year: 2017,
      citation: "twitter.com"
    },{
      quote: "One man’s crappy software is another man’s full time job.",
      source: "Jessica Gaston"
    },{
      quote: "If at first you don't succeed, call it version 1.0.",
      source: "Charles Lauller",
      year: 2020,
      citation: "quotes.net"
    },{
      quote: "Those who don't believe in magic will never find it.",
      source: "Roald Dahl",
      year: 2018,
      citation: "roalddahl.com",
      category: "Life"
    }
  ]

// gets random number from defined array
// - array is not defined here jet ;)

  const getRandomQuote = (arr) => {
    const randomQuote = Math.floor(Math.random() * arr.length);
    return arr[randomQuote];
  }

// print random quote func
  const printQuote = () => {
    const quote = getRandomQuote(quotes); // create var named quote and store random quote inside
    const quoteBox = document.querySelector('#quote-box'); // selection div with id of quote-box
    let html = `<p class="quote">${quote.quote}</p><p class="source">${quote.source}`; // adding quote and it's source to p element ( didnt close p element )

    if ( quote.category ) { // if object have a category then
      html += `<span class="category">${quote.category}</span>`; // add category
    } if ( quote.citation ) { // if object have a citation then
      html += `<span class="citation">${quote.citation}</span>`; // add citation
    } if ( quote.year ) { // if object have a year then
      html += `<span class="year">${quote.year}</span>`; // add year
    }
    html += `</p>`; // closing the p tag
    randomBg(); // calls random background function
    return quoteBox.innerHTML = html; // returns the final result of collected data to div with id quote-box
  }

// random bg func
  function randomBg() {
    const body = document.querySelector('body'); // selection body tag
    const red = Math.floor(Math.random() * 255); // random nr for red
    const green = Math.floor(Math.random() * 255); // random nr for green
    const blue = Math.floor(Math.random() * 255); // random nr for blue
    body.style.backgroundColor = `rgb(${red},${green},${blue})`; // changing background color with random red green and blue values
  }

  setInterval(printQuote, 10000); // callback for printQuote after 10 seconds (infinite)

  document.getElementById('load-quote').addEventListener("click", printQuote, false); // gets load quote and adds event listener on click, if clicked then calls print quote
