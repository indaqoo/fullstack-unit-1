  const quotes = [
    {
      quote: "First, solve the problem. Then, write the code.",
      source: "John Johnson",
      category: "Programming"
    },
    {
      quote: "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code.",
      source: "Christopher Thompson",
      year: 2017,
      citation: "twitter.com"
    },
    {
      quote: "One man’s crappy software is another man’s full time job.",
      source: "Jessica Gaston"
    },
    {
      quote: "If at first you don't succeed, call it version 1.0.",
      source: "Charles Lauller",
      year: 2020,
      citation: "quotes.net"
    },
    {
      quote: "Those who don't believe in magic will never find it.",
      source: "Roald Dahl",
      year: 2018,
      citation: "roalddahl.com",
      category: "Life"
    }
  ]

  const getRandomQuote = () => {
    const randomQuote = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomQuote];
    return quote;
  }

  const printQuote = () => {
    const quote = getRandomQuote();
    const quoteBox = document.querySelector('#quote-box');
    let html = `<p class="quote">${quote.quote}</p><p class="source">${quote.source}`;

    if ( quote.category ) {
      html += `<span class="category">${quote.category}</span>`;
    } if ( quote.citation ) {
      html += `<span class="citation">${quote.citation}</span>`;
    } if ( quote.year ) {
      html += `<span class="year">${quote.year}</span>`;
    }

    html += `</p>`;
    console.log(html);
    randomBg();
    return quoteBox.innerHTML = html;
  }

  function randomBg() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    const body = document.querySelector('body');
    body.style.backgroundColor = `rgb(${red},${green},${blue})`;
  }

  const timer = () => {
    printQuote();
    randomBg();
  }

  setInterval(timer, 10000);

  document.getElementById('load-quote').addEventListener("click", printQuote, false);
