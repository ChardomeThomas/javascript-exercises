/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here




    var today = new Date();
    var month = today.toLocaleString('en-EN', { month: 'long' });
    var weekday = today.toLocaleString('en-EN', { weekday: 'long' });
    var day = today.getDate();
    var hour = today.getHours();
    var min = today.getMinutes();
    var year = today.getFullYear();

    document.getElementById("target").innerHTML = weekday +" "+ day + " " + month + " " + year + ", " + hour +"h"+min;

})();
