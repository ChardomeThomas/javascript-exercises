/* becode/javascript
*
* /09-fetch/05-delete/script.js - 11.5: supprimer un élément
*
* coded by leny@BeCode
* started at 12/05/2019
*/

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  async function heroes(){
    try{
      const heroesFetch = await fetch('http://localhost:3000/heroes');
      const data = await heroesFetch.json();
      return data;
    } catch (error){
      console.error(error);
    };
  }
  let hero = heroes();

  document.getElementById('run').addEventListener('click', function (){

    function getHeroes(object){
      const id = parseInt(document.querySelector('#hero-id').value);


      object.forEach(element => {
        if (element.id == id ){
          object.splice( object.indexOf(element), 1  );
        }
      });
    };
    hero.then(object => {
      getHeroes(object);
      console.log(object);
    });
  });
})();
