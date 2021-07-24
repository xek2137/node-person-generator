const os = require('os');
const fs = require('fs');
const names = require('./names.js');

const nameGenerator = name => {
  return name[Math.floor(Math.random() * name.length)];
};

const people = [];

do {
  const genderArray = ['F', 'M'];
  const genderGenerator = genderArray[Math.floor(Math.random() * 2)];
  const ageGenerator = Math.floor(Math.random() * 87) + 18;
  const name = (genderGenerator === 'F') ? nameGenerator(names.femaleNames) : nameGenerator(names.maleNames);
  const fistNameGenerator = name.split(' ')[0];
  const lastNameGenerator = name.split(' ')[1];

  const person = {
    gender: genderGenerator,
    firstName: fistNameGenerator,
    lastName: lastNameGenerator,
    age: ageGenerator,
  };

  people.push(person)

} while (people.length < 20)

const personGeneratorData = JSON.stringify(people);
fs.writeFile('personData.json', personGeneratorData, (err) => {
  err ? console.log('Something went wrong', err) : console.log('The file has been saved!');
});
console.log(people)