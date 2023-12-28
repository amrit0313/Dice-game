

var randomNumber= Math.floor(Math.random()*6)+1;
var newImg= randomNumber + ".png";
document.querySelectorAll("img")[0].setAttribute("src", newImg);


var randomNumber1= Math.floor(Math.random()*6)+1;
var newImg1 = randomNumber1 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", newImg1);

// document.getElementById("btn").addEventListener("click", function(){
//     let audio =new Audio("dice-142528.mp3");
//     audio.play();

//    audio.onplay=function(){
//      location.reload();
//    };
// });

document.getElementById("btn").addEventListener("click", function(){
  let audio = new Audio("dice-142528.mp3");
  audio.play();

  // Delay the page reload
  setTimeout(function() {
      location.reload();
  }, 1001); // Delay in milliseconds
});

if(randomNumber > randomNumber1){
  document.querySelector("h2").innerHTML = "Player A wins";
  
}
else if(randomNumber1>randomNumber){
    document.querySelector("h2").innerHTML= "Player B wins";
}
else{
     document.querySelector("h2").innerHTML= "You made a Boo Boo ...";
}

