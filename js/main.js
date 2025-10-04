let stage = 1, round = 1, points = 0, roundTime = 30, timerInterval;
const stageInfo = document.getElementById('stage-info');
const pointsDisplay = document.getElementById('points');
const timerDisplay = document.getElementById('timer');
const gameContainer = document.getElementById('game-container');
const zoneSelection = document.getElementById('zone-selection');

function selectZone(zone){
  zoneSelection.style.display = 'none';
  if(zone === 'irochima') gameContainer.style.backgroundImage = "url('assets/images/background/irochima.jpg')";
  else gameContainer.style.backgroundImage = "url('assets/images/background/nepal.jpg')";
  startRound();
}

function startRound(){
  roundTime = 30;
  timerDisplay.textContent = roundTime+'s';
  timerInterval = setInterval(()=>{
    roundTime--;
    timerDisplay.textContent = roundTime+'s';
    if(roundTime<=0){
      clearInterval(timerInterval);
      nextRound();
      zoneSelection.style.display = 'block';
    }
  },1000);
}

function nextRound(){
  round++;
  if(round>5){ round=1; stage++; }
  stageInfo.textContent = `Stage ${stage} - Round ${round}`;
}

function addPoints(playerId, pts){
  points += pts;
  pointsDisplay.textContent = `Points: ${points}`;
  const starsBar = document.getElementById(`stars${playerId}`);
  let width = parseInt(starsBar.style.width) || 0;
  width += pts*2;
  if(width>100) width=100;
  starsBar.style.width = width+'%';
  const player = document.getElementById(`player${playerId}`);
  if(width>=100){
    const gradeEl = player.querySelector('.grade');
    let currentGrade = parseInt(gradeEl.textContent.replace('Grade ',''));
    gradeEl.textContent = `Grade ${currentGrade+1}`;
    starsBar.style.width = '0%';
  }
}

// Example: simulate points
setInterval(()=>addPoints(1,5),2000);
