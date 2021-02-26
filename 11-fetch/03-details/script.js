/* becode/javascript
*
* /09-fetch/03-details/script.js - 11.3: details
*
* coded by leny@BeCode
* started at 12/05/2019
*/

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  const template = document.querySelector("#tpl-hero");
  const target = document.querySelector("#target");

  document.getElementById('run').addEventListener('click', function (){

    async function heroes(){
      const heroesFetch = await fetch('http://localhost:3000/heroes');
      const data = await heroesFetch.json();

      data.forEach(element => {
        const herId = document.getElementById("hero-id").value;
        const superH = template.cloneNode(true).content;
        if (herId == element.id){
        superH.querySelector(".name").innerHTML = element.name;
        superH.querySelector(".alter-ego").innerHTML = element.alterEgo;
        superH.querySelector(".powers").innerHTML = element.abilities;
        target.appendChild(superH);
        }
      })
    }
    heroes();
  });
})();
