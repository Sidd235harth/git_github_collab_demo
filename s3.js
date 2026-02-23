let level = 1;
let strength = 10;
let agility = 10;
let intelligence = 10;

function levelUp() {

    level++;
    strength += Math.floor(Math.random()*5)+1;
    agility += Math.floor(Math.random()*5)+1;
    intelligence += Math.floor(Math.random()*5)+1;

    document.getElementById("level").innerText = level;
    document.getElementById("strength").innerText = strength;
    document.getElementById("agility").innerText = agility;
    document.getElementById("intelligence").innerText = intelligence;

    showEffect();
}

function showEffect(){
    const effect = document.getElementById("levelEffect");

    effect.style.opacity = "1";
    effect.style.transform = "translate(-50%,-50%) scale(1.3)";

    setTimeout(()=>{
        effect.style.opacity = "0";
        effect.style.transform = "translate(-50%,-50%) scale(1)";
    },800);
}
