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

// Test cases for Exercise 3
console.log("Original Array:", [9, 4, 6, 2], ", Sorted Array:", sortNumbers([9, 4, 6, 2]));
console.log("Original Array:", [2, 3, 5, 1], ", Sorted Array:", sortNumbers([2, 3, 5, 1]));
console.log("Original Array:", [8, 5, 7, 2], ", Sorted Array:", sortNumbers([8, 5, 7, 2]));


// Exercise 4



// Exercise 5


