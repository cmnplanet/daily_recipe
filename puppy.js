
let containment = document.querySelector('.ul');

// let title = `${results.title}`
// let thumb = `${results.thumbnail}`
// let linky = `${results.href}`

// const returnRecipe = {
//   thumbnail: data.results.thumbnail,
//   title: data.results.title,
//   linky: data.results.href,
// }

// let sampleURL = "http://www.recipepuppy.com/api/";

// fetch("http://www.recipepuppy.com/api/")
//   .then (response => response.json())
//   .then (data =>
//       console.log(data);

  // function searchTerms(data){
  //
  //   return ``
  // }


fetch("http://jsonplaceholder.typicode.com/users")
.then(
   function(response) {
     if (response.status !== 200) {
       console.log(response.status);
       return;
     }
     response.json().then(function(data) {
       console.log("Here is the data:", data);
     });
   }
 )
 .catch(function(err) {
   console.log("Something's wrong", err);
 });


 let result = document.getElementsByClassName("sample")[0];
 let items = data;

 for(let i = 0; i < items.length; i++) {

   if 
     let h5 = document.createElement("h5");
     h5.innerHTML = items[i].name;
     result.appendChild(h5);

     let p = document.createElement("p");
     p.innerHTML = items[i].company;
     result.appendChild(p);

 }
