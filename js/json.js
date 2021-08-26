// JavaScript Object Notation => JSON
// JSON.stringify();
// JSON.parse();
const user = { id: 11, name: "kb", job: "vagabond" };
const stringified = JSON.stringify(user);

console.log(user);
console.log(stringified);

const shop = {
    name: "kb's shop",
    adress: "kb road",
    products: ["coke", "chanchur", "water"],
    profit: 39000,
    isExpensive: false,
    owner: {
        name: "kb",
        proffession: "vagabond"
    }
};

const shopStringified = JSON.stringify(shop);

// console.log(shop);
console.log(shopStringified);

const convertedShop = JSON.parse(shopStringified);

console.log(convertedShop.owner);