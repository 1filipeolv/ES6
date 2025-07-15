const country = {
       live: 'Dublin',
       love: 'Galway'
};

const text = 'I live in ' + country.live + ' and I love ' + country.love + '!';

console.log(text);

const newText = `I live in ${country.live} and I love ${country.love}!`;

console.log(newText);

const fruits = 'banana'
                + `\n`
                + 'orange'
                + `\n`
                + 'apple';

console.log(fruits);

const newFruits = 
`banana
orange
apple`;

console.log(newFruits);
