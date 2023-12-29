let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let author = document.querySelector('.author');
let changeBg = document.querySelector('#changeBg')

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
      { quote: `"The only limit to our realization of tomorrow will be our doubts of today."`, author: "Unknown"},
      { quote: `"The best way to find yourself is to lose yourself 
        in the service of others. "`,
        author: `Mahatma Gandhi`
    },

    {
        quote: `"If you want to live a happy life, tie it to a goal not  
        to people or other things. "`,
        author: `Albert Einstein`
    },

    {
        quote: `"At his best, man is the noblest of all animals; separated 
        from law and justice he is the worst. "`,
        author: `Aristotle`
    },

    {
        quote: `"Your time is limited so dont waste it living someone 
        else's life. "`,
        author: `Steve Jobs`
    },

    {
        quote: `"Tell me and i forget. Teach me and i remember. Involve me 
        and i learn. "`,
        author: `Benjamin Franklin`
    },

    {
        quote: `"If you look at what you have in life, you'll always have 
        more. If you look at what you don't have in life, you'll never have 
        enough. "`,
        author: `Oprah Winfrey`
    },

    {
        quote: `"It does not matter how slowly you go as long as you do not
        stop. "`,
        author: `confucius`
    },

    {
        quote: `"Our lives begin to end the day we become silent about the 
        things that matter"`,
        author: `Martin Luther King, Jr. `
    },

    {
        quote: `"Remember that not getting what you want is sometimes a 
        wonderful stroke of luck"`,
        author: `Dalai Lama`
    },

    {
        quote: `"The journey of a thousand miles begin with one step. "`,
        author: `Lao Tzu`
    }
    ]

    


const bgImages = [
    {
        one: "background: url(./background.jpg) no-repeat center center/ cover;",
    },
    {
        one: "background: url(./bg1.jpg) no-repeat center center/ cover;",
    },
    {
        one: "background: url(./bg2.jpg) no-repeat center center/ cover;",
    },
    {
        one: "background: url(./bg3.jpg) no-repeat center center/ cover;",
    },
    {
        one: "background: url(./bg4.jpg) no-repeat center center/ cover;",
    },
    {
        one: "background: url(./bg5.jpg) no-repeat center center/ cover;",
    },
    {
        one: "background: url(./bg6.jpg) no-repeat center center/ cover;",
    }
]

btn.addEventListener("click", () => {
    let random = Math.floor(Math.random() * quotes.length);
    quote.textContent = quotes[random].quote;
    author.textContent = quotes[random].author;
})

changeBg.addEventListener("click", () => {
    let random = Math.floor(Math.random() * bgImages.length);
    document.body.style = bgImages[random].one
})



document.addEventListener('DOMContentLoaded', function () {
    const copyButton = document.getElementById('copyButton');
    const quoteText = document.querySelector('.quote');

    copyButton.addEventListener('click', function () {
        // Create a textarea element to hold the text to be copied
        const textarea = document.createElement('textarea');
        textarea.value = quoteText.innerText;

        // Append the textarea to the document
        document.body.appendChild(textarea);

        // Select the text in the textarea
        textarea.select();
        textarea.setSelectionRange(0, 99999); // For mobile devices

        // Copy the selected text to the clipboard
        document.execCommand('copy');

        // Remove the textarea from the document
        document.body.removeChild(textarea);

        // Optionally, provide visual feedback to the user
        copyButton.innerText = 'Copied!';
        setTimeout(() => {
            copyButton.innerText = 'Copy Quote';
        }, 2000);
    });
});
