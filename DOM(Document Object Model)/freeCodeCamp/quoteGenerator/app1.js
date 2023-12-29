let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person')

const quotes =  [
    {
      quote: "The only way to do great work is to love what you do.",
      author: "Steve Jobs"
    },
    {
      quote: "In three words I can sum up everything I've learned about life: it goes on.",
      author: "Robert Frost"
    },
    {
      quote: "Be yourself; everyone else is already taken.",
      author: "Oscar Wilde"
    },
    {
      quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      author: "Nelson Mandela"
    },
    {
      quote: "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt"
    },
    {
      quote: "It is during our darkest moments that we must focus to see the light.",
      author: "Aristotle"
    },
    {
      quote: "Life is what happens when you're busy making other plans.",
      author: "John Lennon"
    },
    {
      quote: "Get busy living or get busy dying.",
      author: "Stephen King"
    },
    {
      quote: "The purpose of our lives is to be happy.",
      author: "Dalai Lama"
    },
    {
      quote: "You only live once, but if you do it right, once is enough.",
      author: "Mae West"
    },
    {
      quote: "Life is really simple, but we insist on making it complicated.",
      author: "Confucius"
    },
    {
      quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill"
    },
    {
      quote: "The only limit to our realization of tomorrow will be our doubts of today.",
      author: "Franklin D. Roosevelt"
    },
    {
      quote: "The purpose of our lives is to be happy.",
      author: "Dalai Lama"
    },
    {
      quote: "The only way to achieve the impossible is to believe it is possible.",
      author: "Charles Kingsleigh"
    },
    {
      quote: "If you want to live a happy life, tie it to a goal, not to people or things.",
      author: "Albert Einstein"
    },
    {
      quote: "The best way to predict the future is to create it.",
      author: "Peter Drucker"
    },
    {
      quote: "Success is not in what you have, but who you are.",
      author: "Bo Bennett"
    },
    {
      quote: "Don't watch the clock; do what it does. Keep going.",
      author: "Sam Levenson"
    },
    {
      quote: "Your time is limited, don't waste it living someone else's life.",
      author: "Steve Jobs"
    }
  ]

btn.addEventListener("click", () => {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.textContent = quotes[random].author;
})