self.onmessage = (event) => {
  if (event.data === "rq2-benign-worker-check") {
    self.postMessage("Benign Web Worker executed successfully.");
  }
};
