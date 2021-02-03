/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    const performOperation = operation => {
      var val1= document.getElementById("op-one").value;
      var val2= document.getElementById("op-two").value;
      var res = 0;
        // perform the operation
        switch (operation) {
          case "addition" : res = parseFloat(val1) + parseFloat(val2);
          alert(res) ;
          break;
          case 'substraction': res = val1 - val2;
          alert(res) ;
          break;
          case 'multiplication': res = val1 * val2;
          alert(res) ;
          break;
          case 'division': res = val1 / val2;
          alert(res) ;
          break;



          default: alert("probleme");

        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();
