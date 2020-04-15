//===================================== ES5

// function User(name, id) {
//   this.name = name;
//   this.id = id;
//   this.human = true;
//   this.hello = function(){
//     console.log('hello ' + this.name);
//   };
// }
// User.prototype.exit = function(name){
//   console.log('User ' + this.name + ' left');
// };
// let ivan = new User('Ivan', 25),
//     alex = new User('Alex', 20);
// console.log(ivan);
// console.log(alex);
// ivan.exit();

//===================================== ES6

// class User {
//   constructor(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//   }
//   hello() {
//     console.log(`hello ${this.name}`);
//   }
//   exit() {
//     console.log(`User ${this.name} left`);
//   }
// }

// let ivan = new User('Ivan', 25),
//     alex = new User('Alex', 20);

// console.log(ivan);
// console.log(alex);

// ivan.exit();
// ivan.hello();

//===================================== THIS

// let obj = {
//   a : 20,
//   b : 15, 
//   sum : function(){
//     console.log(this);
//   }
// };
// obj.sum(); // == {a: 20, b: 15, sum: ƒ}

//===================================== ручное присваив. THIS любоф функц.

// let user = {
//   name: 'John', 
//   add: 'Hi'
// };

// function sayName(surname){
//   console.log(this);
//   console.log(this.name + surname);
// }

// console.log(sayName.call(user, ' Smith')); // {name: "John"} // John Smith
// console.log(sayName.apply(user, [' Snow'])); // {name: "John"} // John Snow

// //===================================== THIS bind

// function count(n){
//   return this * n;
// }

// let double = count.bind(2);
// console.log(double(3)); // 6
// console.log(double(10)); // 20

//Указание конкретного контекста = call, apply, bind