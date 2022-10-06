var onecar = document.getElementById("onecar");
var secondcar = document.getElementById("secondcar");
var game = document.getElementById("game");
var result = document.getElementById("result");

const score = document.getElementById("score");
 var counter = 0;

 var sound = document.getElementById("sound");
 var gameoversound = document.getElementById("gameoversound");
var restartsound = document.getElementById("restartsound");
//one car



onecar.addEventListener("animationiteration", function(){
    var random = ((Math.round(Math.random()*3))* 130);

    onecar.style.left = random + 'px';

    counter ++;
})

// second car

window.addEventListener("keydown", function(e){
if(e.keyCode == '39'){
    var raceCarLeft = parseInt(window.getComputedStyle(secondcar).getPropertyValue("left"));
    if (raceCarLeft < 260) 
    {secondcar.style.left =(raceCarLeft + 130) + "px"};
     sound.play();
}

if(e.keyCode == "37"){
    var raceCarLeft = parseInt(window.getComputedStyle(secondcar).getPropertyValue("left"));
    
    if (raceCarLeft > 0) 
    {secondcar.style.left =(raceCarLeft - 130) + "px"
    };
    sound.play();
   
}


})


//gameover 

 setInterval(function GameOver (){
    var onecarTop = parseInt(window.getComputedStyle(onecar).getPropertyValue("top"));
    var onecarLeft = parseInt(window.getComputedStyle(onecar).getPropertyValue("left"));
    var secondCarLeft = parseInt(window.getComputedStyle(secondcar).getPropertyValue("left"));

    
    if((onecarLeft === secondCarLeft) && (onecarTop > 408) && (onecarTop < 503)){
      
        result.style.display = "block";
      
        gameoversound.play();
      
        game.style.display = "none";
       score.innerHTML = `score: ${counter}`;
        counter = 0;
    }

    

},10)
