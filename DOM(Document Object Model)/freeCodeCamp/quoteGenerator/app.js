let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
    {
        quote: `"The best way to find yourself is to lose yourself 
        in the service of others. "`,
        person: `Mahatma Gandhi`
    },

    {
        quote: `"If you want to live a happy life, tie it to a goal not  
        to people or other things. "`,
        person: `Albert Einstein`
    },

    {
        quote: `"At his best, man is the noblest of all animals; separated 
        from law and justice he is the worst. "`,
        person: `Aristotle`
    },

    {
        quote: `"Your time is limited so dont waste it living someone 
        else's life. "`,
        person: `Steve Jobs`
    },

    {
        quote: `"Tell me and i forget. Teach me and i remember. Involve me 
        and i learn. "`,
        person: `Benjamin Franklin`
    },

    {
        quote: `"If you look at what you have in life, you'll always have 
        more. If you look at what you don't have in life, you'll never have 
        enough. "`,
        person: `Oprah Winfrey`
    },

    {
        quote: `"It does not matter how slowly you go as long as you do not
        stop. "`,
        person: `confucius`
    },

    {
        quote: `"Our lives begin to end the day we become silent about the 
        things that matter"`,
        person: `Martin Luther King, Jr. `
    },

    {
        quote: `"Remember that not getting what you want is sometimes a 
        wonderful stroke of luck"`,
        person: `Dalai Lama`
    },

    {
        quote: `"The journey of a thousand miles begin with one step. "`,
        person: `Lao Tzu`
    },

]

btn.addEventListener("click", () => {
    let random = Math.floor(Math.random() * quotes.length);
    quote.textContent = quotes[random].quote;
    person.textContent = quotes[random].person;
})

