const food = ['Burger', 'Pizza', 'Sushi'];

const love = food.map(function(name) {
       return `I love ${name}!`;
});

console.log(love);

const loveArrow = food.map((name) => {
       return `I love ${name}!`;
});

console.log(loveArrow);

const loveArrowSingle = food.map(name => {
       return `I love ${name}!`;
});

console.log(loveArrowSingle);

const loveArrowOneLine = food.map(name => `I love ${name}!`);

console.log(loveArrowOneLine); 

const loveArrowChain = food
                     .filter(name => name === 'Burger')
                     .map(name => `I love ${name}!`);

console.log(loveArrowChain);
