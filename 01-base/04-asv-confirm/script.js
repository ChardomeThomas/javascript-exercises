/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    var cond = false;
    while (cond == false){
      var Age = prompt("Enter your age");
      var Gender = prompt("Enter your gender");
      var Town = prompt("Enter the town where you live");
      var cor = confirm("age: " + Age + "gender: " + Gender + " town: " + Town);
      if (cor == true)
      {
        cond = true;
      }
      else{
cond = false;
      }




    }

})();
