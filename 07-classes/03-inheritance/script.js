/* becode/javascript
 *
 * /07-classes/03-inheritance/script.js - 7.3: héritage
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }
    // your code here
    class Dog extends Animal {
      constructor(name) {
        super();
        this.name = name;
      }
      static greeting = "ouaf";
    }
    class Cat extends Animal {
      constructor(name) {
        super();
        this.name = name;
      }
      static greeting = "miaou";
    }
var dog = new Dog ("Nala");
var cat = new Cat ("Bouchon");

document.getElementById("run").addEventListener("click", function() {
  console.log(dog.sayHello());
  console.log(cat.sayHello());
  });


})();
