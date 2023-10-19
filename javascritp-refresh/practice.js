var name = 'Raj';
var age = 29;
var hasHobbies = 'Cricket';

// function summrizeUser(userName, userAge, userHasHobbies) {
//     return ('My name is ' + userName + ', age is ' + userAge + ' and my hobbies is ' + userHasHobbies);
// }
// console.log(summrizeUser(name, age, hasHobbies));

// Arrow Function
const summrizeUser = (userName, userAge, userHasHobbies) => {
    return ('My name is ' + userName + ', age is ' + userAge + ' and my hobbies is ' + userHasHobbies);
}
console.log(summrizeUser(name, age, hasHobbies));

// const add = (a, b) => {
//     return a + b;
// }
// console.log(add(5, 6));

// Without using return 
const add = (a, b) => a + b;
console.log(add(5, 6));

const addOne = a => a + 5;
console.log(addOne(18));

const addRandom = () => 8 + 7;
console.log(addRandom());

const person = {
    name: "Raj",
    age: 29,
    greet() {
        console.log("Hello I am ", this.name);
    }
}
person.greet();
// console.log(person.greet);

const myHobbies = ["Cricket", "Cooking"];

for (var hobby of myHobbies) {
    console.log(hobby);
}

const myHobbiesMap = ["Cricket", "Cooking"];
console.log(myHobbiesMap.map(hobby => {
    return "map " + hobby;
}));

const copiedHobbies = [...myHobbies];
console.log(copiedHobbies);

const copiedPerson = { ...person };
console.log(copiedPerson);

const toArray = (...args) => {
    return args;
};
console.log(toArray(1, 2, 3, 4, 5));

const toDict = ({...args}) => {
    return args
};
console.log(toDict({name: 'Raj', age: 29}));