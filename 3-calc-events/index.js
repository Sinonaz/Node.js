import { log } from 'console'
import EventEmitter from 'events'

const emitter = new EventEmitter()
const operand1 = Number(process.argv[2])
const operand2 = Number(process.argv[3])
const operation = process.argv[4]

emitter.on(operation, ({a, b}) => {
  if (operation === 'add') {
    emitter.emit('result', a + b)
  }
})

emitter.on('result', (res) => console.log(res))
emitter.emit(operation, {a: operand1, b: operand2})