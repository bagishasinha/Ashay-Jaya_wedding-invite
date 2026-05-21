const openBtn = document.getElementById("openInvite");
const openingScreen = document.getElementById("openingScreen");
const mainContent = document.getElementById("mainContent");

openBtn.addEventListener("click", async () => {

  openingScreen.style.display = "none";

  mainContent.classList.remove("hidden");

  try{

    await bgMusic.play();

    isPlaying = true;

    musicBtn.innerHTML = "⏸";

  }catch(error){

    console.log("Autoplay blocked");

  }

});

/* Countdown */

const weddingDate = new Date("June 27, 2026 21:00:00").getTime();

setInterval(() => {

  const now = new Date().getTime();

  const distance = weddingDate - now;

  const days = Math.floor(distance / (1000*60*60*24));

  const hours = Math.floor(
    (distance % (1000*60*60*24))
    / (1000*60*60)
  );

  const minutes = Math.floor(
    (distance % (1000*60*60))
    / (1000*60)
  );

  const seconds = Math.floor(
    (distance % (1000*60))
    / 1000
  );

    document.getElementById("days").innerHTML =
    days;

    document.getElementById("hours").innerHTML =
    hours;

    document.getElementById("minutes").innerHTML =
    minutes;

    document.getElementById("seconds").innerHTML =
    seconds;

},1000);

/* Floating Petals */

const petalsContainer = document.querySelector(".petals");

for(let i=0;i<25;i++){

  let petal = document.createElement("div");

  petal.classList.add("petal");

  petal.innerHTML = "🌸";

  petal.style.left = Math.random()*100 + "vw";

  petal.style.animationDuration =
    5 + Math.random()*10 + "s";

  petal.style.fontSize =
    14 + Math.random()*20 + "px";

  petal.style.opacity =
    Math.random();

  petalsContainer.appendChild(petal);
}

/* Music */

const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");

let isPlaying = false;

musicBtn.addEventListener("click",()=>{

  if(isPlaying){

    bgMusic.pause();

    musicBtn.innerHTML = "🎵";

  }else{

    bgMusic.play();

    musicBtn.innerHTML = "⏸";

  }

  isPlaying = !isPlaying;

});
const brideBtn =
document.getElementById("ladkiwaleBtn");

const groomBtn =
document.getElementById("ladkewaleBtn");

/* Bride Side */

brideBtn.addEventListener("click",()=>{

  alert("✨ Welcome Nakhrile Patna ke Ladkiwale..! 💜");

});

/* Groom Side */

groomBtn.addEventListener("click",()=>{

  alert("😎 Welcome Dabangg Rengna ke Ladkewale..! 💜");

});
/* Sparkles */

const sparklesContainer =
document.querySelector(".sparkles");

for(let i=0;i<35;i++){

  let sparkle =
  document.createElement("div");

  sparkle.classList.add("sparkle");

  sparkle.innerHTML = "✦";

  sparkle.style.left =
  Math.random()*100 + "vw";

  sparkle.style.top =
  Math.random()*100 + "vh";

  sparkle.style.fontSize =
  8 + Math.random()*12 + "px";

  sparkle.style.animationDelay =
  Math.random()*4 + "s";

  sparklesContainer.appendChild(sparkle);
}


document.addEventListener("DOMContentLoaded", function () {

  /* DIYA GAME */

  const diyaBtn =
  document.getElementById("diyaBtn");

  const diyaGame =
  document.getElementById("diyaGame");

  const diyas =
  document.querySelectorAll(".diya");

  const gameMessage =
  document.querySelector(".game-message");

  /* OPEN DIYA GAME */

  diyaBtn.addEventListener("click", () => {

    diyaGame.classList.toggle("hidden-game");

  });

  /* LIGHT DIYAS */

  let litCount = 0;

  diyas.forEach((diya) => {

    diya.addEventListener("click", () => {

      if (!diya.classList.contains("active")) {

        diya.classList.add("active");

        litCount++;

      }

      if (litCount === diyas.length) {

        gameMessage.innerHTML =
        "✨ सारे दीये जगमगा उठे 🙏";

      }

    });

  });

});
/* HALDI GAME */

const haldiBtn =
document.getElementById("haldiBtn");

const haldiCard =
document.getElementById("haldiCard");

const haldiCounter =
document.getElementById("haldiCounter");

const haldiText =
document.getElementById("haldiText");

let haldiClicks = 0;

/* THROW HALDI */

haldiBtn.addEventListener("click",()=>{

  haldiCounter.classList.remove("hidden-game");

  haldiClicks++;

  /* Increase yellow effect */

  const opacity =
  Math.min(haldiClicks * 0.08, 0.8);

  haldiCard.style.background =
  `rgba(255, 220, 80, ${opacity})`;

  haldiText.innerHTML =
  `🌼 Haldi Thrown: ${haldiClicks}/10`;

  /* Final Celebration */

  if(haldiClicks >= 10){

    haldiText.innerHTML =
    "💃 Full Haldi Masti Activated 🌼✨";

    haldiBtn.disabled = true;

    haldiBtn.innerHTML =
    "✨ Haldi Complete";
  }

});
/* TIC TAC TOE */

const sangeetBtn =
document.getElementById("sangeetBtn");

const ticGame =
document.getElementById("ticGame");

const ticCells =
document.querySelectorAll(".tic-cell");

const ticStatus =
document.getElementById("ticStatus");

let currentPlayer = "X";

let gameActive = true;

/* Open Game */

sangeetBtn.addEventListener("click",()=>{

  ticGame.classList.toggle("hidden-game");

});

/* Winning Patterns */

const winPatterns = [

  [0,1,2],
  [3,4,5],
  [6,7,8],

  [0,3,6],
  [1,4,7],
  [2,5,8],

  [0,4,8],
  [2,4,6]
];

/* Cell Click */

ticCells.forEach((cell,index)=>{

  cell.addEventListener("click",()=>{

    if(
      cell.innerHTML !== ""
      || !gameActive
    ) return;

    /* Add X or O */

    cell.innerHTML = currentPlayer;

    cell.style.color =

      currentPlayer === "X"

      ? "#ff85c2"

      : "#9d7dff";

    /* CHECK WINNER */

    checkWinner();

    /* Change Turn */

    currentPlayer =

      currentPlayer === "X"

      ? "O"

      : "X";

    if(gameActive){

      ticStatus.innerHTML =

        currentPlayer === "X"

        ? "Grrom Side Turn 💜"

        : "Bride Side Turn 💙";
    }

  });

});

/* Winner Function */

function checkWinner(){

  let winnerFound = false;

  winPatterns.forEach((pattern)=>{

    const a =
    ticCells[pattern[0]].innerHTML;

    const b =
    ticCells[pattern[1]].innerHTML;

    const c =
    ticCells[pattern[2]].innerHTML;

    if(a && a === b && b === c){

      winnerFound = true;

      gameActive = false;

      ticStatus.innerHTML =

        a === "X"

        ? "💜 Bride Side Wins!"

        : "💙 Groom Side Wins!";

    }

  });

  /* DRAW */

  if(!winnerFound){

    let filled = 0;

    ticCells.forEach((cell)=>{

      if(cell.innerHTML !== ""){

        filled++;

      }

    });

    if(filled === 9){

      ticStatus.innerHTML =
      "✨ It's a Draw";

      gameActive = false;
    }

  }

}
/* TILAK GAME */

const tilakBtn =
document.getElementById("tilakBtn");

const tilakGame =
document.getElementById("tilakGame");

const tilakTarget =
document.getElementById("tilakTarget");

const tilakText =
document.getElementById("tilakText");

tilakBtn.addEventListener("click",()=>{

  tilakGame.classList.toggle("hidden-game");

});

tilakTarget.addEventListener("click",()=>{

  tilakTarget.classList.add("hit");

  tilakText.innerHTML =
  "👑 Tilak Complete ✨";

});

/* RING GAME */

const ringBtn =
document.getElementById("ringBtn");
const ringArea  =
document.getElementById("ringArea");
const ringGame =
document.getElementById("ringGame");

const correctRing =
document.querySelector(".correct-ring");

const ringText =
document.getElementById("ringText");

ringBtn.addEventListener("click",()=>{

  ringArea.classList.toggle("hidden-game");

});

correctRing.addEventListener("click",()=>{

  ringText.innerHTML =
  "💍 Ring Found • Shaadi Confirmed ✨";

});
/* MANDAP GAME */

const mandapBtn =
document.getElementById("mandapBtn");

const mandapGame =
document.getElementById("mandapGame");

const flowerBtn =
document.getElementById("flowerBtn");

const mandapArea =
document.getElementById("mandapArea");

const mandapText =
document.getElementById("mandapText");

let flowerCount = 0;

mandapBtn.addEventListener("click",()=>{

  mandapGame.classList.toggle("hidden-game");

});

flowerBtn.addEventListener("click",()=>{

  flowerCount++;

  mandapArea.innerHTML += "🌸";

  if(flowerCount >= 5){

    mandapText.innerHTML =
    "✨ मंडप सज गया। 💜";

    flowerBtn.disabled = true;

  }

});

/* BAARAT MAZE */

/* BAARAT MAZE */

const baaratBtn =
document.getElementById("baaratBtn");

const mazeGame =
document.getElementById("mazeGame");

const horsePlayer =
document.getElementById("horsePlayer");

const mazeText =
document.getElementById("mazeText");

const upBtn =
document.getElementById("upBtn");

const downBtn =
document.getElementById("downBtn");

const leftBtn =
document.getElementById("leftBtn");

const rightBtn =
document.getElementById("rightBtn");

let x = 10;
let y = 10;

baaratBtn.addEventListener("click",()=>{

  mazeGame.classList.toggle("hidden-game");

});

function updateHorse(){

  horsePlayer.style.left =
  x + "px";

  horsePlayer.style.top =
  y + "px";

  /* WIN */

  if(x >= 200 && y >= 200){

    mazeText.innerHTML =
    "🎉 आ गए बाराती!  💃 ✨";

  }

}

upBtn.addEventListener("click",()=>{

  y -= 20;

  if(y < 0) y = 0;

  updateHorse();

});

downBtn.addEventListener("click",()=>{

  y += 20;

  if(y > 210) y = 210;

  updateHorse();

});

leftBtn.addEventListener("click",()=>{

  x -= 20;

  if(x < 0) x = 0;

  updateHorse();

});

rightBtn.addEventListener("click",()=>{

  x += 20;

  if(x > 210) x = 210;

  updateHorse();

});