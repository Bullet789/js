let array = ['java','javascript','c++','typescript','php','html','css','kotlink','swift','python'];
let accumulator = [];
for (let i = 0; i < array.length; i ++) {
    if (array[i].length > 3) {
        accumulator.push(array[i])
    }
}
console.log(accumulator)