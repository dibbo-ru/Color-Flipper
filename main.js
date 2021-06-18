const colors =["green","red","blue","yellow"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    const randomNumber=getRandomNumber();
   // console.log(randomNumber);
    
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent= colors[randomNumber];
});

function getRandomNumber(){
  //for(let i=0; i<=3;i++)
return Math.floor(Math.random()* colors.length);    
}