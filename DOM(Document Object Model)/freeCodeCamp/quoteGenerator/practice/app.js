let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let author = document.querySelector('.author');

const quotes = [
      { quote: `"The only way to do great work is to love what you do."`, author: "Steve Jobs" },
      { quote: `"In three words I can sum up everything I've learned about life: it goes on."`, author: "Robert Frost" },
      { quote: `"Be yourself; everyone else is already taken."`, author: "Oscar Wilde" },
      { quote: `"The greatest glory in living lies not in never falling, but in rising every time we fall."`, author: "Nelson Mandela" },
      { quote: `"The future belongs to those who believe in the beauty of their dreams."`, author: "Eleanor Roosevelt" },
      { quote: `"It is during our darkest moments that we must focus to see the light."`, author: "Aristotle" },
      { quote: `"Life is what happens when you're busy making other plans."`, author: "John Lennon" },
      { quote: `"Get busy living or get busy dying."`, author: "Stephen King" },
      { quote: `"The purpose of our lives is to be happy."`, author: "Dalai Lama" },
      { quote: `"You only live once, but if you do it right, once is enough."`, author: "Mae West" },
      { quote: `"Life is really simple, but we insist on making it complicated."`, author: "Confucius" },
      { quote: `"Success is not final, failure is not fatal: It is the courage to continue that counts."`, author: "Winston Churchill" },
      { quote: `"The only limit to our realization of tomorrow will be our doubts of today."`, author: "Franklin D. Roosevelt" },
      { quote: `"The only way to achieve the impossible is to believe it is possible."`, author: "Charles Kingsleigh" },
      { quote: `"If you want to live a happy life, tie it to a goal, not to people or things."`, author: "Albert Einstein" },
      { quote: `"The best way to predict the future is to create it."`, author: "Peter Drucker" },
      { quote: `"Success is not in what you have, but who you are."`, author: "Bo Bennett" },
      { quote: `"Don't watch the clock; do what it does. Keep going."`, author: "Sam Levenson" },
      { quote: `"Your time is limited, don't waste it living someone else's life."`, author: "Steve Jobs" },
      { quote: `"The only source of knowledge is experience."`, author: "Albert Einstein" },
      { quote: `"Life is 10% what happens to us and 90% how we react to it."`, author: "Charles R. Swindoll" },
      { quote: `"Believe you can and you're halfway there."`, author: "Theodore Roosevelt" },
      { quote: `"Happiness is not something readymade. It comes from your own actions."`, author: "Dalai Lama" },
      { quote: `"Do not wait to strike till the iron is hot, but make it hot by striking."`, author: "William Butler Yeats" },
      { quote: `"The only thing we have to fear is fear itself."`, author: "Franklin D. Roosevelt" },
      { quote: `"It is never too late to be what you might have been."`, author: "George Eliot" },
      { quote: `"If you are not willing to risk the usual, you will have to settle for the ordinary."`, author: "Jim Rohn" },
      { quote: `"Opportunities don't happen. You create them."`, author: "Chris Grosser" },
      { quote: `"You miss 100% of the shots you don't take."`, author: "Wayne Gretzky" },
      { quote: `"Success is not how high you have climbed, but how you make a positive difference to the world."`, author: "Roy T. Bennett" },
      { quote: `"Don't be afraid to give up the good to go for the great."`, author: "John D. Rockefeller" },
      { quote: `"The only place where success comes before work is in the dictionary."`, author: "Vidal Sassoon" },
      { quote: `"Strive not to be a success, but rather to be of value."`, author: "Albert Einstein" },
      { quote: `"The secret to getting ahead is getting started."`, author: "Mark Twain" },
      { quote: `"I find that the harder I work, the more luck I seem to have."`, author: "Thomas Jefferson" },
      { quote: `"Don't watch the clock; do what it does. Keep going."`, author: "Sam Levenson" },
      { quote: `"You have within you right now, everything you need to deal with whatever the world can throw at you."`, author: "Brian Tracy" },
      { quote: `"What lies behind us and what lies before us are tiny matters compared to what lies within us."`, author: "Ralph Waldo Emerson" },
      { quote: `"The only limit to our realization of tomorrow will be our doubts of today."`, author: "Unknown"}
    ]

btn.addEventListener("click", () => {
    let random = Math.floor(Math.random() * quotes.length);
    quote.textContent = quotes[random].quote;
    author.textContent = quotes[random].author;
})