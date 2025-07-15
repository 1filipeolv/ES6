const person = {
       name: 'Filipe',
       age: 19
};

Object.freeze(person);

person.age = 30;

console.log(person);
