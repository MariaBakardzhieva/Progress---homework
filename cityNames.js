// TASK 1:
// TASK: from 'cities' array generate a new array 'cityNames' which will contain only the names of the cities
// let cities = [
//   { name: "Sofia", population: 1_236_000 },
//   { name: "Plovdiv", population: 343_424 },
//   { name: "Burgas", population: 202_766 },
//   { name: "Varna", population: 335_177 },
// ];

// YOUR CODE HERE:
const cityNames = cities.map((e) => e.name);

// TEST:
console.log(cityNames);

// EXPECTED OUTPUT:
// [ 'Sofia', 'Plovdiv', 'Burgas', 'Varna' ]