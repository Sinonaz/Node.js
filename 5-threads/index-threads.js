import { Worker } from "worker_threads";

const array = Array.from({ length: 300000 }, (_, i) => i + 1);

function compute(array) {
  return new Promise((resolve, reject) => {
    const worker = new Worker("./worker.js", {
      workerData: { array },
    });

    worker.on("message", (result) => {
      resolve(result);
    });

    worker.on("error", (error) => {
      reject(error);
    });
  });
}

function splitArray(array, count = 7) {
  const result = [];
  const partSize = Math.ceil(array.length / count);

  for (let i = 0; i < count; i++) {
    const start = i * partSize;
    const end = start + partSize;

    result.push(array.slice(start, end));
  }

  return result;
}

async function main() {
  try {
    performance.mark("start");

    const chunks = splitArray(array);

    const results = await Promise.all(
        chunks.map(chunk => compute(chunk))
    );

    const result = results.reduce((acc, curr) => acc + curr, 0);

    performance.mark("end");
    performance.measure("compute", "start", "end");

    console.log(result);
    console.log(performance.getEntriesByName("compute").pop());
  } catch (error) {
    console.error(error.message);
  }
}

void main();
