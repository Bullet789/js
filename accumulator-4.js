let array = ['baysangur','said','deni','rizvan','zelamh','malik','ashab','adam','said-huseyn','umar'];
let accumulator = [];
for (let i = 0; i < array.length; i++) {
    if (array[i][0] == 'a') {
        accumulator.push(array[i])
    }
}
console.log(accumulator)