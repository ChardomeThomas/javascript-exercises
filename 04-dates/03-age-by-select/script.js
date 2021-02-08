/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    document.getElementById("run").addEventListener("click", function() {
      var date = new Date();
      var yearN= date.getFullYear();
      var monthN = date.getMonth()+1;
      var dayN = date.getDate();
      var dob_year= document.getElementById("dob-year").value;
      var dob_day= document.getElementById("dob-day").value;
      var dob_month= document.getElementById("dob-month").value;
      var age = yearN - dob_year;
      if(monthN < dob_month){
        age --;
      }
      else{
        if(monthN == dob_month && dayN < dob_day ){
          age--;
        }
      }
      alert(age);
    });

})();
