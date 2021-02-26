/* becode/javascript
*
* /10-asynchronous/08-async-get-comments/script.js - 10.8: chargement d'articles et de commentaires (async/await)
*
* coded by leny@BeCode
* started at 09/05/2019
*/

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  document.querySelector("#run").addEventListener("click", function(){
    async function get(){
      const res = await window.lib.getPosts();
      console.log(res);
      res.forEach((post) => {
        async function comments(){
          const comment = await window.lib.getComments();
          post.comment = comment;

        }
        comments();
      });
    }
    console.log(get());
    
  })
})();
