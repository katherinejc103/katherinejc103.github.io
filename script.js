function addAndSubtract(numbers) {
    let sum = 0;
    let difference = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (i % 2 === 0) {
            // If the index is even, add the number
            sum += numbers[i];
        } else {
            // If the index is odd, subtract the number
            difference -= numbers[i];
        }
    }

    return {
        sum: sum,
        difference: difference
    };
}

// Example usage:
const numbers = [10, 5, 3, 7, 2];
const result = addAndSubtract(numbers);
console.log("Sum:", result.sum);
console.log("Difference:", result.difference);







