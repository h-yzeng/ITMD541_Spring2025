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



// Exercise 3



// Exercise 4



// Exercise 5


