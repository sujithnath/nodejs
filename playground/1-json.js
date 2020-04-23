const fs = require('fs');

// const book = {
//   title: 'Ego is the enemy',
//   author: 'Ryan Holiday',
// };

// const bookJSON = JSON.stringify(book);

const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const userData = JSON.parse(dataJSON);

userData.name = 'Sujith';
userData.age = '29';
console.log(userData);

const userJSON = JSON.stringify(userData);
console.log(userJSON);
fs.writeFileSync('1-json.json', userJSON);
