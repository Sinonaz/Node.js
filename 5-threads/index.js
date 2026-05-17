const array = Array.from({ length: 300000 }, (_, i) => i + 1);

function compute(array) {
  return array.reduce((acc, curr) => {
    if (curr % 3 === 0) {
      return acc + 1;
    }

    return acc;
  }, 0);
}


function main() {
  performance.mark("start");
  const result = compute(array);
  performance.mark("end");
  performance.measure("compute", "start", "end");
  console.log(result);
  console.log(performance.getEntriesByName("compute").pop());
}

main();
