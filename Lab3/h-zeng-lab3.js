// H Zeng
// ITMD 541-02 Graduate Student

// Exercise 1
function minMaxAverage(numbers) {
    const totalNumbers = numbers.length;
    const minValue = Math.min(...numbers);
    const maxValue = Math.max(...numbers);
    const average = numbers.reduce((sum, num) => sum + num) / totalNumbers;
    console.log(`Total Numbers: ${totalNumbers}, Min Value: ${minValue}, Max Value: ${maxValue}, Average: ${average.toFixed(2)}`);
}

// Test Cases - Exercise 1
minMaxAverage([2, 5, 23, 6, 9, 4, 30, 1]);
minMaxAverage([1, 5, 3, 5, 10, 12, 8, 6]);
minMaxAverage([1, 2, 3, 4, 5, 6, 7, 8]);
minMaxAverage([2, 4, 6, 8, 10, 12, 14, 16]);

// Exercise 2
function countVowels(word) {
    const vowels = 'aeiouAEIOU';
    const count = [...word].filter(char => vowels.includes(char)).length;
    const vowelCount = count === 1 ? 'vowel' : 'vowels';
    console.log(`${word}: ${count} ${vowelCount}`);
}

// Test Cases - Exercise 2
countVowels("Winter");
countVowels("Spring");
countVowels("Summer");
countVowels("Autumn");

// Exercise 3
function sortNumbers(numbers) {
    return [...numbers].sort((a, b) => a - b);
}

// Test Cases - Exercise 3
console.log("Original Array:", [9, 4, 6, 2], ", Sorted Array:", sortNumbers([9, 4, 6, 2]));
console.log("Original Array:", [2, 3, 5, 1], ", Sorted Array:", sortNumbers([2, 3, 5, 1]));
console.log("Original Array:", [8, 5, 7, 2], ", Sorted Array:", sortNumbers([8, 5, 7, 2]));

// Exercise 4
function celsiusToFahrenheit(celsius) {
    const c = parseFloat(celsius);
    const f = (c * 9/5) + 32;
    console.log(`${c.toFixed(1)} Celsius = ${f.toFixed(1)} Fahrenheit`);
}

// Test Cases - Exercise 4
celsiusToFahrenheit(0);
celsiusToFahrenheit(-40);
celsiusToFahrenheit("35");
celsiusToFahrenheit("100");
celsiusToFahrenheit("37");

// Exercise 5
function sortPeople(people) {
    return people.toSorted((a, b) => a.age - b.age).map(({ name, age, city }) => `${name} is ${age} and from ${city}`);
}

// Test Cases - Exercise 5
const people1 = [
    {name: 'James', age: 32, city: 'New York'},
    {name: 'Mary', age: 29, city: 'Los Angeles'},
    {name: 'John', age: 23, city: 'Chicago'},
    {name: 'Patricia', age: 28, city: 'Houston'},
    {name: 'Robert', age: 34, city: 'Phoenix'}
];

const people2 = [
    {name: 'Michael', age: 30, city: 'Philadelphia'},
    {name: 'Linda', age: 27, city: 'San Antonio'},
    {name: 'William', age: 33, city: 'San Diego'},
    {name: 'Barbara', age: 31, city: 'Dallas'},
    {name: 'David', age: 29, city: 'San Jose'}
];

const people3 = [
    {name: 'Richard', age: 36, city: 'Austin'},
    {name: 'Susan', age: 28, city: 'Jacksonville'},
    {name: 'Joseph', age: 32, city: 'Fort Worth'},
    {name: 'Karen', age: 30, city: 'Columbus'},
    {name: 'Thomas', age: 35, city: 'Charlotte'}
];

console.log(sortPeople(people1));
console.log(sortPeople(people2));
console.log(sortPeople(people3));
