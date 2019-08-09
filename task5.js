const logger = num => console.log(num);

const monitor = {
  lock: false,
};
function throttle(f, ms) {
  return (num) => {
    if (monitor.lock === false) {
      f(num);
      monitor.lock = true;
      setTimeout(() => monitor.lock = false, ms);
    }
  };
}

const f = throttle(logger, 100, 1);
f(1);
f(2);
setTimeout(f, 100, 3);
