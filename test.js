const logger = num => console.log(num);

const monitor = {};
function throttle(f, ms, key) {
  monitor[key] = false;
  return (num) => {
    if (monitor[key] === false) {
      f(num);
      monitor[key] = true;
      setTimeout(() => monitor[key] = false, ms);
    }
  };
}

const f = throttle(logger, 100, 1);
f(1);
f(2);
setTimeout(f, 100, 3);

const f1 = throttle(logger, 100, 2);
f1(4);
f1(5);
setTimeout(f1, 100, 6);

setTimeout(console.log, 1000, monitor);
