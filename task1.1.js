//this from its enclosing scope
const user = {
  name: "John Smith",
  sayHi: function() {
    console.log(this.name);
  },
  timeoutSayHi: function() {
    setTimeout(() => { this.sayHi() }, 1000);
  }
};
user.timeoutSayHi();
