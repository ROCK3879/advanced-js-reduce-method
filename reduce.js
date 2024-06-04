 /**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */

// Summing an array of numbers:
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log('Sum:', sum); // Output: Sum: 15

// Totaling a specific object property
const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  }
];

const totalExperience = teamMembers.reduce((accumulator, currentValue) => accumulator + currentValue.yrsExperience, 0);
console.log('Total experience:', totalExperience); // Output: Total experience: 16

// Grouping by a property, and totaling it too
const groupedByProfession = teamMembers.reduce((accumulator, currentValue) => {
  const profession = currentValue.profession;
  if (!accumulator[profession]) {
    accumulator[profession] = 0;
  }
  accumulator[profession] += currentValue.yrsExperience;
  return accumulator;
}, {});

console.log('Grouped by profession:', groupedByProfession); 
// Output: Grouped by profession: { Developer: 12, Designer: 4 }
