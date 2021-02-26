/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
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


        var hName = document.querySelector('#hero-name').value;
        var alterE = document.querySelector('#hero-alter-ego').value;
        var abil = document.querySelector('#hero-powers').value;

        if (hName.length != 0 && alterE.length != 0 && abil.length != 0){
          data.push({
            'id': data.length +1,
            'name': hName,
            'alterEgo': alterE,
            'abilities': [abil]

          });

        }else{
          alert('error');
        }
        console.log(data);
      };
        
heroes();

    });

})();
