
for(var i=0;i<document.querySelectorAll("button").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){

      var buttonClicked= this.innerHTML;
      playSound(buttonClicked);
      animateButton(buttonClicked);
    });
}

document.addEventListener("keypress",function(event){
  playSound(event.key);
  animateButton(event.key);
});

function playSound(key)
{
  switch (key) {
    case "w":
      var tom1=new Audio('sounds/tom-1.mp3');
      tom1.play();break;

    case "a":
      var tom2=new Audio('sounds/tom-2.mp3');
      tom2.play();break;

    case "s":
      var tom3=new Audio('sounds/tom-3.mp3');
      tom3.play();break;

    case "d":
      var tom4=new Audio('sounds/tom-4.mp3');
      tom4.play();break;

    case "j":
      var snare=new Audio('sounds/snare.mp3');
      snare.play();break;

    case "k":
      var audio=new Audio('sounds/crash.mp3');
      audio.play();break;

    case "l":
      var audio=new Audio('sounds/kick-bass.mp3');
      audio.play();break;
  }
}

function animateButton(key){
  var a=document.querySelector("."+key);
  a.classList.add("pressed");

  setTimeout(function(){
    a.classList.remove("pressed");
  },150);
}
