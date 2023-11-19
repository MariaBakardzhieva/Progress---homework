// TASK 2:
let dict = {
    Sofia: "София",
    Plovdiv: "Пловдив",
    Burgas: "Бургас",
    Varna: "Варна",
};
let cities = [
    // { name: "Sofia", population: 1 _236_000 },
    // { name: "Plovdiv", population: 343 _424 },
    // { name: "Burgas", population: 202 _766 },
    // { name: "Varna", population: 335 _177 },
];

// YOUR CODE HERE:
let bgCityNames = cities.map((city) => dict[city.name]);

// TEST:
console.log(bgCityNames);