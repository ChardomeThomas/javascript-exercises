/* becode/javascript
*
* /05-arrays/02-manipulate-array/script.js - 5.2: manipulation de tableau
*
* coded by leny@BeCode
* started at 26/10/2018
*/

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

  var fruits = [
    "pomme",
    "poire",
    "fraise",
    "tomate",
    "orange",
    "mandarine",
    "durian",
    "pêche",
    "raisin",
    "cerise",
  ];

  // your code here

  document.getElementById("run").addEventListener("click", function() {
    var first = fruits.shift(); //supprime le premier élément du tableau
    var newLength = fruits.unshift('banana') // ajoute banana au début
    var last = fruits.pop(); // supprime cerise (à la fin)
    var newLength = fruits.push('kiwi'); //ajoute kiwi à la fin
    console.log(fruits);

  });
})();
