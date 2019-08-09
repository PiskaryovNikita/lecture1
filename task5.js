const logger = num => console.log(num);
const synchronizer = {
  ready: true,
};

function throttle(f, ms) {
  return (num) => {
    if (synchronizer.ready === true) {
      f(num);
      synchronizer.ready = false;
      setTimeout(() => synchronizer.ready = true, ms);
    }
  };
}

const f = throttle(logger, 100);
f();
