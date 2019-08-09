function stepper(start, step = 1) {
  return () => start += step;
}
const gen = stepper(2);
const gen1 = stepper(3);
console.log(gen());
console.log(gen());
console.log(gen());
console.log("===============");
console.log(gen1());
console.log(gen1());
console.log(gen1());
