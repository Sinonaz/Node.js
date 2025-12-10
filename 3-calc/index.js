const operand1 = Number(process.argv[2])
const operand2 = Number(process.argv[3])
const operation = process.argv[4]

const { [operation]: calc } = await import(`./${operation}.js`)

console.log(calc(operand1, operand2))