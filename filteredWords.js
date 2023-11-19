let quote =
    "A common mistake that people make when trying to design something completely foolproof is to underestimate the ingenuity of complete fools.";

// Split the quote into an array of words
let words = quote.split(/\s+/);

// Filter words that start with 't' and are longer than 2 symbols
let filteredWords = words.filter(
    (word) => word.startsWith("t") && word.length > 2
);

// Print the filtered words to the console
console.log(filteredWords);