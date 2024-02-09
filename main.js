const leftCounterEl = document.querySelector('#left-counter');
const rightCounterEl = document.querySelector('#right-counter');
const leftIncrementBtn = document.querySelector('#left-increment-btn');
const leftDecrementBtn = document.querySelector('#left-decrement-btn');
const rightIncrementBtn = document.querySelector('#right-increment-btn');
const rightDecrementBtn = document.querySelector('#right-decrement-btn');
const resetBtn = document.querySelector('#reset-btn');

let leftCounter = 0;
let rightCounter = 0;


function incrementCounter(counterSide) {
  switch (counterSide) {
    case 'left':
      leftCounter += 1;
      leftCounterEl.textContent = leftCounter;
      break;
  
    case 'right':
      rightCounter += 1; 
      rightCounterEl.textContent = rightCounter;
    default:
      break;
  }
}

function decrementCounter(counterSide) {
  switch (counterSide) {
    case 'left':
      if (leftCounter === 0) {
        leftCounter = 0;
      } else {
        leftCounter -= 1;
      }
      leftCounterEl.textContent = leftCounter;
      break;
  
    case 'right':
      if (rightCounter === 0) {
        rightCounter = 0;
      } else {
        rightCounter -= 1;
      }
      rightCounterEl.textContent = rightCounter;
    default:
      break;
  }
}

function resetCounters() {
  leftCounter = 0;
  rightCounter = 0;

  leftCounterEl.textContent = leftCounter;
  rightCounterEl.textContent = rightCounter;
}


leftIncrementBtn.addEventListener('click', () => incrementCounter('left'));
leftDecrementBtn.addEventListener('click', () => decrementCounter('left'));

rightIncrementBtn.addEventListener('click', () => incrementCounter('right'));
rightDecrementBtn.addEventListener('click', () => decrementCounter('right'));

resetBtn.addEventListener('click', resetCounters);
