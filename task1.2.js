//bind
const user = {
  name: "John Smith",
  sayHi: function() {
    console.log(this.name);
  },
  timeoutSayHi: function() {
    setTimeout(this.sayHi.bind(this), 1000);
  }
};
user.timeoutSayHi();
