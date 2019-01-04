const Q = document.getElementById("q-clip");
const audioQ = document.getElementById("Q");
const W = document.getElementById("w-clip");
const audioW = document.getElementById("W")
const E = document.getElementById("e-clip");
const audioE = document.getElementById("E")
const A = document.getElementById("a-clip");
const audioA = document.getElementById("A")
const S = document.getElementById("s-clip");
const audioS = document.getElementById("S")
const D = document.getElementById("d-clip");
const audioD = document.getElementById("D")
const Z = document.getElementById("z-clip");
const audioZ = document.getElementById("Z")
const X = document.getElementById("x-clip");
const audioX = document.getElementById("X")
const C = document.getElementById("c-clip");
const audioC = document.getElementById("C")

const display = document.querySelector('#display')


//window.addEventListener("keydown", function(key){
  //if(key.keyCode == 81){
    //audioQ.play();
//}
//});


window.addEventListener("keydown", function(key){
  switch(key.keyCode){
    case 81: audioQ.play();
      display.textContent = "Heater";
      break;
    case 87: audioW.play();
      display.textContent = "Heater-2";
      break;
    case 69: audioE.play();
      display.textContent = "Heater-3";
      break;
    case 65: audioA.play();
      display.textContent = "Heater-4";
      break;
    case 83: audioS.play();
      display.textContent = "Heater-6";
      break;
    case 68: audioD.play();
      display.textContent = "DSC-Oh";
      break;
    case 90: audioZ.play();
      display.textContent = "Kick_n_Hat";
      break;
    case 88: audioX.play();
      display.textContent = "RP4-Kick";
      break;
    case 67: audioC.play();
      display.textContent = "CEV-H2";
      break;
     
  }
});


Q.addEventListener("click", function(){
  audioQ.play();
  display.textContent = "Heater"
});


W.addEventListener("click", function(){
  audioW.play();
  display.textContent = "Heater-2";
});


E.addEventListener("click", function(){
  audioE.play();
  display.textContent = "Heater-3";
});


A.addEventListener("click", function(){
  audioA.play();
  display.textContent = "Heater-4";
});


S.addEventListener("click", function(){
  audioS.play();
  display.textContent = "Heater-6";
});


D.addEventListener("click", function(){
  audioD.play();
  display.textContent = "DSC-Oh";
});


Z.addEventListener("click", function(){
  audioZ.play();
  display.textContent = "Kick_n_Hat";
});


X.addEventListener("click", function(){
  audioX.play();
  display.textContent = "RP4-Kick";
});


C.addEventListener("click", function(){
  audioC.play();
  display.textContent = "Cev-H2";
});