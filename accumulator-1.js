let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let accumulator = 0;
for (let i = 0; i < array.length; i ++) {
    if (array[i] > 0) {
        accumulator += array[i]
    }
}
console.log(accumulator);