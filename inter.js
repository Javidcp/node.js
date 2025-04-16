function getSum(a, b) {
    setTimeout(() => {
        return a + b
    },0)
}

const sum = getSum(30, 10)

console.log(`Sum is ${sum}`);
