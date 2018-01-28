//
// Object Destructuring
//

// const book = {
//     title: "Ego not found",
//     author: "Rayn",
//     publisher: {
//         // name: "Penguin"
//     }
// };

// const {name: publisherName = "self-published"} = book.publisher;

// console.log(publisherName);

//
// Array Destructuring
//

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
const [, city, state = 'New York'] = address;
console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (hot)', "$2.00", "$2.50", "$3.00"];
const [coffeeType, , mediumPrice] = item;
console.log(`medium size ${coffeeType} is ${mediumPrice}`);