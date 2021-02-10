/* becode/javascript
*
* /06-objects/02-assign-properties/script.js - 6.2: assigner des propriétés
*
* coded by leny@BeCode
* started at 08/05/2019
*/

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  const computers = [
    {id: "0001", available: false, user: "leny", os: "macOS"},
    {id: "0002", available: false, user: "Nicolas"},
    {id: "0003"},
    {id: "0004", os: "Windows"},
    {id: "0005"},
    {id: "0006", os: "macOS"},
    {id: "0007"},
    {id: "0008"},
    {id: "0009", available: false, user: "Anthony"},
  ];
  const defaultProps = {
    available: true,
    os: "linux",
    user: null,
  };
  // your code here
  // var cpt = 0;
  // while (cpt < computers.length){
  //   if (computers[cpt].available == undefined){
  //     computers[cpt].available = defaultProps.available;
  //   }
  //   if (computers[cpt].user == undefined){
  //       computers[cpt].user = defaultProps.user;
  //     }
  //     if (computers[cpt].os == undefined){
  //       computers[cpt].os = defaultProps.os;
  //     }
  //     console.log("available: "+ computers[cpt].available + " user: " +computers[cpt].user + " os: "+  computers[cpt].os);
  // cpt++;
  // }
  var cpt = 0;
  document.getElementById("run").addEventListener("click", function() {
    while (cpt < computers.length){
      const returnedTarget = Object.assign({}, defaultProps,computers[cpt]);
      cpt++;
      console.log(returnedTarget);

    }


  });

})();
