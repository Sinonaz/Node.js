const string = process.argv[2]

if (!string) {
  console.log('Строка не передана')
}

const stringSplit = string.split(' ')

const timeout = stringSplit.reduce((acc, item) => {
  let ml

  switch (true) {
    case item.includes('h'):
      ml = Number(item.replaceAll('h', '')) * 3600000
      break
    case item.includes('m'):
      ml = Number(item.replaceAll('m', '')) * 60000
      break
    case item.includes('s'):
      ml = Number(item.replaceAll('s', '')) * 1000
      break
  }

  return acc + ml
}, 0)

setTimeout(() => {
  console.log(`Прошло ${timeout} милисекунд`)
}, timeout)
