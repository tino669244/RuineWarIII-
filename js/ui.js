// Placeholder for dynamic HUD updates (mini-map, health, armor, bullets, stars)
function updateHealth(playerId, value){
  document.getElementById('health-bar').style.width = value + '%';
}

function updateArmor(playerId, value){
  document.getElementById('armor-bar').style.width = value + '%';
}

// Add more UI updates as needed
