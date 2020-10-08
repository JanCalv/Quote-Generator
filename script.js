// Change Background
// var bgColors = ['#e9e96f', '#5c5ce2','#8b1616'];
// var i = 0;    
// document.querySelector("button").addEventListener("click" , function (){

//     a = bgColors.shift(); 
//     bgColors.push(a);     

//     document.querySelector("body").style.backgroundColor = a;
// })



// Create a objects with different quotes
//I created an array with objects inside.
var quotesList = [
    {
       quote: '"The roots of education are bitter, but the fruit is sweet"',
       author: "- Aristotle"
    },

    {
        quote: '"It is not what happens to you, but how you react to it that matters"',
        author: "- Epictetus"
    },

    {
        quote: '"Ignorance is the root and stem of every evil"',
        author: "- Plato"
    },

    {
        quote: '"The only true wisdom is in knowing you know nothing."',
        author: "- Socrates"
    },
];

var textQuote = document.querySelector('.quote-primary');
var textAuthor = document.querySelector('.quote-secondary');

textQuote.textContent = quotesList[3].quote;
textAuthor.textContent = quotesList[3].author;

//Load the quotes 1 by 1 by clicking the button

function quoteGenerator() {
    var quoteNum = Math.floor(Math.random()*quotesList.length);

    var quotes = quotesList[quoteNum];

    textQuote.textContent = quotes.quote;
    textAuthor.textContent = quotes.author;
}



setInterval(quoteGenerator, 2000);

//Button to load another quote (not necesarry because of set interval)
// var button = document.querySelector('.btn-load');
// button.addEventListener('click', quoteGenerator);





