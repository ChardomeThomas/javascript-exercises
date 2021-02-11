/* becode/javascript
*
* /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
*
* coded by leny@BeCode
* started at 26/10/2018
*/

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
  var tab = [];
  var cpt = 0;
  var taille;


  // your code here
  document.getElementById("run").addEventListener("click", function() {
    while (cpt<10){
      tab[cpt] = Math.floor(Math.random() * 100) + 1;
      cpt++;
    }
    tab.forEach(function(item, index, tab) {
      var add =  document.getElementById("n-"+(index+1));
      add.innerHTML = item;
      taille = tab.length;

    });
    document.getElementById("max").innerHTML = Math.max(...tab);
    document.getElementById("min").innerHTML = Math.min(...tab);
    var sum = tab.reduce(function(a, b){
      return a + b;
    }, 0);
    document.getElementById("sum").innerHTML = sum;
    document.getElementById("average").innerHTML = sum/taille;
  });
})();
