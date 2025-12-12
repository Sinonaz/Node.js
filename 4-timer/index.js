const hours = Number((process.argv[2] ?? 0) * 3600000)
const minutes = Number((process.argv[3] ?? 0) * 60000)
const seconds = Number((process.argv[4] ?? 0) * 1000)

const timeout = hours + minutes + seconds

setTimeout(() => {
  console.log(`Прошло ${timeout} милисекунд`)
}, timeout)
