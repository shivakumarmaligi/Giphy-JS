// fetch("https://api.giphy.com/v1/gifs/search?api_key=0Sp9Atcbs0AD0NyNij7ibGRpS6RKrJ5u&q=hello&limit=10&offset=0&rating=g&lang=en")
// .then((response)=>{
//     console.log(response);
//     let object=await response.json();
//     console.log(object.data);
// })
// let limitplusone=10
function sum(){
 return Math.trunc(Math.random()*25);
}
// my try
async function alpha() {
  let btn = document.getElementById("click-ok");
  btn.addEventListener("click", async () => {
    let field = document.getElementById("text-field");
    let value = field.value;
    // console.log(value);
    let url = `https://api.giphy.com/v1/gifs/search?api_key=0Sp9Atcbs0AD0NyNij7ibGRpS6RKrJ5u&q=${value}&limit=25&offset=0&rating=g&lang=en`;
    let response = await fetch(url);
    let img=await response.json();
    let im=document.getElementById("img-container");
    im.src=img.data[sum()].images.original.url;
    console.log(im.src);
    // .data.images.original.url;
    // console.log(img);
  });
}
alpha();
