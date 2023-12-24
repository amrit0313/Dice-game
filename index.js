

var randomNumber= Math.floor(Math.random()*6)+1;
var newImg= randomNumber + ".png";
document.querySelectorAll("img")[0].setAttribute("src", newImg);


var randomNumber1= Math.floor(Math.random()*6)+1;
var newImg1 = randomNumber1 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", newImg1);


if(randomNumber > randomNumber1){
  document.querySelector("h2").innerHTML = "Amrit wins";
  
}
else if(randomNumber1>randomNumber){
    document.querySelector("h2").innerHTML= "sandeep wins";
}
else{
     document.querySelector("h2").innerHTML= "You made a Boo Boo ...";
}

// document.querySelector("h2").addEventListener("click", function(){

//   if(randomNumber > randomNumber1){
//     document.querySelector("h2").innerHTML = "Amrit wins";
    
//   }
//   else if(randomNumber1>randomNumber){
//       document.querySelector("h2").innerHTML= "shova wins";
//   }
//   else{
//        document.querySelector("h2").innerHTML= "You made a Boo Boo ...";
//   }
// })
