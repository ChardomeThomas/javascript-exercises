/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
 var cpt = 1;

 while(cpt<=100){
if (cpt%3==0 && cpt%5==0){
console.log("fizzbuzz");
}
else{
   if (cpt%3 == 0)
   {
   console.log("fizz");
 }
 else{
   if (cpt%5 ==0)
   {
   console.log("buzz");
}
 else{

  console.log(cpt);
}
}
}
cpt++;
 }
    // your code here

})();
