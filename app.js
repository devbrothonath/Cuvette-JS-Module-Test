const components = [
  {
    title: "rock",
    ring_img: "./components/blue_circle.svg",
    hand_img: "./components/stone_hand.svg",
  },
  {
    title: "scissor",
    ring_img: "./components/purple_circle.svg",
    hand_img: "./components/scissor_hand.svg",
  },
  {
    title: "paper",
    ring_img: "./components/yellow_circle.svg",
    hand_img: "./components/paper_hand.svg",
  },
];

// console.log(randomBot);

const gameArea = document.querySelector(".gameArea");
const rockBtn = document.querySelector(".rockBtn");
console.log(rockBtn);
const scissorBtn = document.querySelector(".scissorBtn");
const paperBtn = document.querySelector(".paperBtn");
const playerOptions = [rockBtn, scissorBtn, paperBtn];
const result = document.querySelector(".result");
const computerScoreElement = document.querySelector(".c-count")
const playerScoreElement = document.querySelector(".p-count")
const rulesBox = document.querySelector(".gameRules")
const rules = document.querySelector(".rules")
const nextBtn = document.querySelector(".nextBtn")

let playerScore = parseInt(localStorage.getItem("playerScore")) || 0;
let computerScore = parseInt(localStorage.getItem("computerScore")) || 0;

playerScoreElement.textContent = playerScore;
computerScoreElement.textContent = computerScore;

playerOptions.forEach((option) => {
  option.addEventListener("click", (e) => {
    // console.log();
    const playerChoice = e.currentTarget.dataset.id;

    const computerHands = components;
    let randomBot =
      computerHands[Math.floor(Math.random() * computerHands.length)];
    let randomBotChoice = randomBot.title;

    winner(playerChoice, randomBotChoice);
  });
});

const winner = (player, computer) => {
  console.log(player);
  console.log(computer);
  if (player == "rock") {
    if (computer == "paper") {
      gameArea.innerHTML = `<div class="third-frame">
      <div class="disc1">
        <div class="disc color">
          <img src="${components[0].ring_img}" class="circle" alt="Circle Image" />
        </div>
        <div class="disc white">
          <img src="${components[0].hand_img}" alt="stone-hand" srcset="">
        </div>
      </div>
      <div class="box1">
        <h2>YOU LOSE</h2>
        <h3>Against PC</h3>
        <button class="playAgain" onclick="window.location.reload()">Play Again</button>
      </div>
      <div class="disc2">
        <div class="rippl-effect">
          <div class="round circle1"></div>
          <div class="round circle2"></div>
          <div class="round circle3"></div>
          <div class="round circle4"></div>
        </div>
        <div class="disc color">
          <img src="${components[2].ring_img}" class="circle" alt="Circle Image" />
        </div>
        <div class="disc white">
          <img src="${components[2].hand_img}" alt="" srcset="">
        </div>
      </div>
      <p class="playerPick">YOU PICKED</p>
      <p class="computerPick">PC PICKED</p>
    </div>`;
      computerScore++;
      // console.log(gameArea);
    } else if (computer == "scissor") {
      gameArea.innerHTML = `<div class="third-frame">
      <div class="disc1">
        <div class="rippl-effect">
          <div class="round circle1"></div>
          <div class="round circle2"></div>
          <div class="round circle3"></div>
          <div class="round circle4"></div>
        </div>
        <div class="disc color">
          <img src="${components[0].ring_img}" class="circle" alt="Circle Image" />
        </div>
        <div class="disc white">
          <img src="${components[0].hand_img}" alt="stone-hand" srcset="">
        </div>
      </div>
      <div class="box1">
        <h2>YOU WIN</h2>
        <h3>Against PC</h3>
        <button class="playAgain" onclick="window.location.reload()">Play Again</button>
      </div>
      <div class="disc2">
        <div class="disc color">
          <img src="${components[1].ring_img}" class="circle" alt="Circle Image" />
        </div>
        <div class="disc white">
          <img src="${components[1].hand_img}" alt="" srcset="">
        </div>
      </div>
      <p class="playerPick">YOU PICKED</p>
      <p class="computerPick">PC PICKED</p>
    </div>`;
      showNextBtn();
      playerScore++;
      // console.log(gameArea);
    } else {
      gameArea.innerHTML = `<div class="third-frame">
      <div class="disc1">
        <div class="disc color">
          <img src="${components[0].ring_img}" class="circle" alt="Circle Image" />
        </div>
        <div class="disc white">
          <img src="${components[0].hand_img}" alt="stone-hand" srcset="">
        </div>
      </div>
      <div class="box1">
        <h2>TIE UP</h2>
        <button class="playAgain" onclick="window.location.reload()">Play Again</button>
      </div>
      <div class="disc2">
        <div class="disc color">
          <img src="${components[0].ring_img}" class="circle" alt="Circle Image" />
        </div>
        <div class="disc white">
          <img src="${components[0].hand_img}" alt="" srcset="">
        </div>
      </div>
      <p class="playerPick">YOU PICKED</p>
      <p class="computerPick">PC PICKED</p>
    </div>`;
    }
  } else if (player == "scissor") {
    if (computer == "paper") {
      gameArea.innerHTML = `<div class="third-frame">
      <div class="disc1">
        <div class="rippl-effect">
          <div class="round circle1"></div>
          <div class="round circle2"></div>
          <div class="round circle3"></div>
          <div class="round circle4"></div>
        </div>
        <div class="disc color">
          <img src="${components[1].ring_img}" class="circle" alt="Circle Image" />
        </div>
        <div class="disc white">
          <img src="${components[1].hand_img}" alt="stone-hand" srcset="">
        </div>
      </div>
      <div class="box1">
        <h2>YOU WIN</h2>
        <h3>Against PC</h3>
        <button class="playAgain" onclick="window.location.reload()">Play Again</button>
      </div>
      <div class="disc2">
        <div class="disc color">
          <img src="${components[2].ring_img}" class="circle" alt="Circle Image" />
        </div>
        <div class="disc white">
          <img src="${components[2].hand_img}" alt="" srcset="">
        </div>
      </div>
      <p class="playerPick">YOU PICKED</p>
      <p class="computerPick">PC PICKED</p>
    </div>`;
      showNextBtn();
      playerScore++;
    } else if (computer == "rock") {
      gameArea.innerHTML = `<div class="third-frame">
      <div class="disc1">
        <div class="disc color">
          <img src="${components[1].ring_img}" class="circle" alt="Circle Image" />
        </div>
        <div class="disc white">
          <img src="${components[1].hand_img}" alt="stone-hand" srcset="">
        </div>
      </div>
      <div class="box1">
        <h2>YOU LOSE</h2>
        <h3>Against PC</h3>
        <button class="playAgain" onclick="window.location.reload()">Play Again</button>
      </div>
      <div class="disc2">
        <div class="rippl-effect">
          <div class="round circle1"></div>
          <div class="round circle2"></div>
          <div class="round circle3"></div>
          <div class="round circle4"></div>
        </div>
        <div class="disc color">
          <img src="${components[0].ring_img}" class="circle" alt="Circle Image" />
        </div>
        <div class="disc white">
          <img src="${components[0].hand_img}" alt="" srcset="">
        </div>
      </div>
      <p class="playerPick">YOU PICKED</p>
      <p class="computerPick">PC PICKED</p>
    </div>`;
      computerScore++;
    } else {
      gameArea.innerHTML = `<div class="third-frame">
      <div class="disc1">
        <div class="disc color">
          <img src="${components[1].ring_img}" class="circle" alt="Circle Image" />
        </div>
        <div class="disc white">
          <img src="${components[1].hand_img}" alt="stone-hand" srcset="">
        </div>
      </div>
      <div class="box1">
        <h2>TIE UP</h2>
        <button class="playAgain" onclick="window.location.reload()">Play Again</button>
      </div>
      <div class="disc2">
        <div class="disc color">
          <img src="${components[1].ring_img}" class="circle" alt="Circle Image" />
        </div>
        <div class="disc white">
          <img src="${components[1].hand_img}" alt="" srcset="">
        </div>
      </div>
      <p class="playerPick">YOU PICKED</p>
      <p class="computerPick">PC PICKED</p>
    </div>`;
    }
  } else if (player == "paper") {
    if (computer == "rock") {
      gameArea.innerHTML = `<div class="third-frame">
      <div class="disc1">
        <div class="rippl-effect">
          <div class="round circle1"></div>
          <div class="round circle2"></div>
          <div class="round circle3"></div>
          <div class="round circle4"></div>
        </div>
        <div class="disc color">
          <img src="${components[2].ring_img}" class="circle" alt="Circle Image" />
        </div>
        <div class="disc white">
          <img src="${components[2].hand_img}" alt="stone-hand" srcset="">
        </div>
      </div>
      <div class="box1">
        <h2>YOU WIN</h2>
        <h3>Against PC</h3>
        <button class="playAgain" onclick="window.location.reload()">Play Again</button>
      </div>
      <div class="disc2">
        <div class="disc color">
          <img src="${components[0].ring_img}" class="circle" alt="Circle Image" />
        </div>
        <div class="disc white">
          <img src="${components[0].hand_img}" alt="" srcset="">
        </div>
      </div>
      <p class="playerPick">YOU PICKED</p>
      <p class="computerPick">PC PICKED</p>
    </div>`;
      showNextBtn();
      playerScore++;
    } else if (computer == "scissor") {
      gameArea.innerHTML = `<div class="third-frame">
      <div class="disc1">
        <div class="disc color">
          <img src="${components[2].ring_img}" class="circle" alt="Circle Image" />
        </div>
        <div class="disc white">
          <img src="${components[2].hand_img}" alt="stone-hand" srcset="">
        </div>
      </div>
      <div class="box1">
        <h2>YOU LOSE</h2>
        <h3>Against PC</h3>
        <button class="playAgain" onclick="window.location.reload()">Play Again</button>
      </div>
      <div class="disc2">
        <div class="rippl-effect">
          <div class="round circle1"></div>
          <div class="round circle2"></div>
          <div class="round circle3"></div>
          <div class="round circle4"></div>
        </div>
        <div class="disc color">
          <img src="${components[1].ring_img}" class="circle" alt="Circle Image" />
        </div>
        <div class="disc white">
          <img src="${components[1].hand_img}" alt="" srcset="">
        </div>
      </div>
      <p class="playerPick">YOU PICKED</p>
      <p class="computerPick">PC PICKED</p>
    </div>`;
      computerScore++;
    } else {
      gameArea.innerHTML = `<div class="third-frame">
      <div class="disc1">
        <div class="disc color">
          <img src="${components[2].ring_img}" class="circle" alt="Circle Image" />
        </div>
        <div class="disc white">
          <img src="${components[2].hand_img}" alt="stone-hand" srcset="">
        </div>
      </div>
      <div class="box1">
        <h2>TIE UP</h2>
        <button class="playAgain" onclick="window.location.reload()">Play Again</button>
      </div>
      <div class="disc2">
        <div class="disc color">
          <img src="${components[2].ring_img}" class="circle" alt="Circle Image" />
        </div>
        <div class="disc white">
          <img src="${components[2].hand_img}" alt="" srcset="">
        </div>
      </div>
      <p class="playerPick">YOU PICKED</p>
      <p class="computerPick">PC PICKED</p>
    </div>`;
    }
  }
  playerScoreElement.textContent = playerScore;
  computerScoreElement.textContent = computerScore;
  localStorage.setItem('playerScore', playerScore);
  localStorage.setItem('computerScore', computerScore);
};

const rulesCloseBtn = document.querySelector(".close-btn");

rules.addEventListener("click", () => {
  rulesBox.classList.toggle("gameRulesBox")
})

rulesCloseBtn.addEventListener("click", () => {
  rulesBox.classList.add("gameRulesBox")
})

const playArea = document.querySelector(".playArea");

const showNextBtn = () => {
  nextBtn.classList.remove("nextBtnRemove");
  nextBtn.addEventListener("click", () => {
    playArea.innerHTML = `<div class="sixth-frame">
    <div class="hurray-imgs">
      <img src="components/stars.svg" alt="stars" srcset="">
      <img class="trophy" src="components/trophy.svg" alt="trophy" srcset="">
    </div>
    <h1>hurray!!</h1>
    <h3>you won the game</h3>
    <button class="playAgain hurrayPlayBtn" onclick="window.location.reload()">Play Again</button>
  </div>`
    nextBtn.classList.add("nextBtnRemove");
  })
}