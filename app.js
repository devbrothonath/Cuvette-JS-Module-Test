const gameArea = document.querySelector(".gameArea");
// const ripple = document.querySelector(".ripple-effect")
const rockBtn = document.querySelector(".rockBtn");
const scissorBtn = document.querySelector(".scissorBtn");
const paperBtn = document.querySelector(".paperBtn");
// const thirdFrame = document.querySelector(".third-frame")
// const fourthFrame = document.querySelector(".fourth-frame")
// const fifthFrame = document.querySelector(".fifth-frame")

rockBtn.addEventListener("click", () => {
    gameArea.innerHTML = `<div class="third-frame">
        <div class="disc1">
          
          <div class="disc color">
            <img src="components/Group3.svg" class="circle" alt="Circle Image" />
          </div>
          <div class="disc white">
            <img src="components/icons8-fist-67 1s.svg" alt="" srcset="">
          </div>
          
        </div>
        <div class="box1">
          <h2>You Lose</h2>
          <h3>Against PC</h3>
          <button>Play Again</button>
        </div>
        <div class="disc2">
          <div class="rippl-effect">
            <div class="round circle1"></div>
            <div class="round circle2"></div>
            <div class="round circle3"></div>
            <div class="round circle4"></div>
          </div>
          <div class="disc color">
            <img src="components/Group3.svg" class="circle" alt="Circle Image" />
          </div>
          <div class="disc white">
            <img src="components/icons8-fist-67 1s.svg" alt="" srcset="">
          </div>
        </div>
      </div>`;
})
scissorBtn.addEventListener("click", () => {
    gameArea.innerHTML = `<div class="fourth-frame">
    <div class="disc1">
      <div class="rippl-effect">
        <div class="round circle1"></div>
        <div class="round circle2"></div>
        <div class="round circle3"></div>
        <div class="round circle4"></div>
      </div>
      <div class="disc color">
        <img src="components/Group3.svg" class="circle" alt="Circle Image" />
      </div>
      <div class="disc white">
        <img src="components/icons8-fist-67 1s.svg" alt="" srcset="">
      </div>
      
    </div>
    <div class="box1">
      <h2>You Win</h2>
      <h3>Against PC</h3>
      <button>Play Again</button>
    </div>
    <div class="disc2">
      
      <div class="disc color">
        <img src="components/Group3.svg" class="circle" alt="Circle Image" />
      </div>
      <div class="disc white">
        <img src="components/icons8-fist-67 1s.svg" alt="" srcset="">
      </div>
    </div>
  </div>`;
})
paperBtn.addEventListener("click", () => {
    gameArea.innerHTML = `      <div class="fifth-frame">
    <div class="disc1">
      <div class="disc color">
        <img src="components/Group3.svg" class="circle" alt="Circle Image" />
      </div>
      <div class="disc white">
        <img src="components/icons8-fist-67 1s.svg" alt="" srcset="">
      </div>
      
    </div>
    <div class="box1">
      <h2>Tie Up</h2>
      <button>Play Again</button>
    </div>
    <div class="disc2">
      
      <div class="disc color">
        <img src="components/Group3.svg" class="circle" alt="Circle Image" />
      </div>
      <div class="disc white">
        <img src="components/icons8-fist-67 1s.svg" alt="" srcset="">
      </div>
    </div>
  </div>`;
})

// cornerBtn.addEventListener("click", () => {
//   gameArea.innerHTML = `<div class="second-frame">
//   <div class="ripple-effect">
//     <div class="round circle1"></div>
//     <div class="round circle2"></div>
//     <div class="round circle3"></div>
//     <div class="round circle4"></div>
//   </div>
//   <div class="result-container">
//     <h2>You Win</h2>
//     <h3>Against PC</h3>
//     <button>Play Again</button>
//   </div>
//   <div class="colored-disc">
//     <div class="disc color">
//       <img src="components/Group3.svg" class="circle" alt="Circle Image" />
//     </div>
//     <div class="disc white">
//       <img src="components/icons8-fist-67 1s.svg" alt="" srcset="">
//     </div>
//   </div>
// </div>`
// });
