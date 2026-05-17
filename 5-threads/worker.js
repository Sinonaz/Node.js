import { parentPort, workerData } from "worker_threads";

function compute({ array }) {
  return array.reduce((acc, curr) => {
    if (curr % 3 === 0) {
      return acc + 1;
    }

    return acc;
  }, 0);
}

parentPort.postMessage(compute(workerData));
