let moneyDisplay = document.getElementById("Money")
let upgradeDisplay = document.getElementById("Upgrades")
let superDisplay = document.getElementById("superUpgrades")
let clickDisplay = document.getElementById("Clicker")
let upgradeClickDisplay = document.getElementById("Upgrader")
let timeDisplay = document.getElementById("Time")
let money = 0
let upgrades = 0
let superUpgrades = 0
let time = 0

function clicker() {
  money += (1 * upgrades) + 1;
  moneyDisplay.innerHTML = money;
}

function upgrade() {
  upgrades += (1 * superUpgrades) + 1;
  upgradeDisplay.innerHTML = upgrades;
  clickDisplay.innerHTML = "+"+(upgrades+1);
}

function superUpgrade() {
  superUpgrades += 1;
  superDisplay.innerHTML = superUpgrades
  upgradeClickDisplay.innerHTML = "+"+(superUpgrades+1);
}

var interval = setInterval(function() {
  timeDisplay.innerHTML = time;
  if (money >= 1000000) {
    timeDisplay.innerHTML = "You finished in "+time+" Seconds!";
    clearInterval(interval);
  }
  time += 1;
}, 1000);
