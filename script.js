let farmerDisplay = document.getElementById("farmerDisplay")
let guardDisplay = document.getElementById("guardDisplay")
let doctorDisplay = document.getElementById("doctorDisplay")
let foodStat = document.getElementById("foodStat")
let guardStat = document.getElementById("guardStat")
let doctorStat = document.getElementById("doctorStat")
let nojobStat = document.getElementById("nojobStat")
let nextButton = document.getElementById("nextButton")
let yearDisplay = document.getElementById("yearDisplay")
let populationDisplay = document.getElementById
("population")
let yearStatsDiv = document.getElementById("yearStatsDiv")
let birthDisplay = document.getElementById("birthDisplay")
let deathDisplay = document.getElementById("deathDisplay")
let eventNews = document.getElementById("eventNews")
let numFarmers = 0
let numGuards = 0
let numDoctors = 0
let numNoJob = 430
let year = 1874
let population = 430
let foodEfficiency = 2.5
let guardEfficiency = 4
let doctorEfficiency = 3.5

let lostDiv = document.getElementById("lostDiv")
let winDiv = document.getElementById("winDiv")
let event = document.getElementById("event")
let stats = document.getElementById("stats")
let title = document.getElementById("title")
let mainDiv = document.getElementById("mainDiv")
let mainDiv2 = document.getElementById("mainDiv2")
let mainDiv3 = document.getElementById("mainDiv3")
lostDiv.style.display = "none"

function farmer(add) {
  if (numFarmers + add >= 0) {
    if (numNoJob - add >= 0) {
      numNoJob -= add;
      numFarmers += add;
    }
  }
  nojobStat.innerHTML = "No Job: "+numNoJob+"m";
  farmerDisplay.innerHTML = numFarmers + 'm';
  if (numFarmers*foodEfficiency-population > 0) {
    foodStat.innerHTML = "Food Production: +"+Math.floor(numFarmers*foodEfficiency-population)+'m Population';
  } else {
    foodStat.innerHTML = "Food Production: "+Math.floor(numFarmers*foodEfficiency-population)+'m Population';
  }
}

function guard(add) {
  if (numGuards + add >= 0) {
    if (numNoJob - add >= 0) {
      numNoJob -= add;
      numGuards += add;
    }
  }
  nojobStat.innerHTML = "No Job: "+numNoJob+"m"
  guardDisplay.innerHTML = numGuards + 'm';
  if (numGuards*guardEfficiency-population <= 0) {
    guardStat.innerHTML = "Defense: "+Math.floor(numGuards*guardEfficiency-population)+'m Population';
  } else {
    guardStat.innerHTML = "Defense: -0m Population";
  }
}

function doctor(add) {
  if (numDoctors + add >= 0) {
    if (numNoJob - add >= 0) {
      numNoJob -= add;
      numDoctors += add;
    }
  }
  nojobStat.innerHTML = "No Job: "+numNoJob+"m"
  doctorDisplay.innerHTML = numDoctors + 'm';
  if (numDoctors*doctorEfficiency-population < 0) {
    doctorStat.innerHTML = "Health: "+Math.floor(numDoctors*doctorEfficiency-population)+'m Population';
  } else {
    doctorStat.innerHTML = "Health: -0m Population";
  }
}

let debounce = true;

function setDebounce() {
  debounce = true;
}

function setDefault() {
  nextButton.innerHTML = "Next Year";
  window.setTimeout(setDebounce, 500);
}

function nextYear() {
  if (debounce) {
    debounce = false
    year += 1;
    yearDisplay.innerHTML = "Year: "+year;
    nextButton.innerHTML = "It is now year "+year;
    window.setTimeout(setDefault, 2000);
    let peopleBorn = numFarmers*foodEfficiency-population;
    let peopleKilled = numGuards*guardEfficiency-population
    if (peopleKilled > 0) {
      peopleKilled = 0;
    }
    let peopleFoo = numDoctors*doctorEfficiency-population
    if (peopleFoo > 0) {
      peopleFoo = 0;
    }
    let peopleDied = peopleKilled+peopleFoo;
    if (peopleDied > 0) {
      peopleDied = 0;
    }
    if (peopleBorn > 0) {
      birthDisplay.innerHTML = peopleBorn+"m people were born"
      population = population + peopleBorn + peopleDied;
    } else {
      birthDisplay.innerHTML = "0m people were born"
      peopleDied = peopleDied + peopleBorn
      population = population + peopleDied;
    }
    deathDisplay.innerHTML = -peopleDied+"m people died"
    yearStatsDiv.style.display = "block";
    populationDisplay.innerHTML = "Population: "+population+" Milion"
    if (population <= 0) {
      event.style.display = "none";
      stats.style.display = "none";
      title.style.display = "none";
      mainDiv.style.display = "none";
      mainDiv2.style.display = "none";
      mainDiv3.style.display = "none";
      nextButton.style.display = "none";
      yearStatsDiv.style.display = "none";
      lostDiv.style.display = "block";
    }
    if (population-numFarmers-numGuards-numDoctors >= 0) {
      numNoJob = population-numFarmers-numGuards-numDoctors
    } else {
      numNoJob = population-numFarmers-numGuards-numDoctors
      numFarmers = numFarmers + numNoJob
      numNoJob = 0
    }
    if (year == 1876) {
      eventNews.innerHTML = "Their has been a drought in the Yellow River basin area. This caused many of North China's crops to fail. The Chinese government gave Shanxi, Henan, Shaanxi, and Zhili over 18 million taels ($2,916,553) of tax remissions over the course of the 3 years which the famine lasted. That was more than 1/5th of one years receipts of the imperial treasury. Despite this, an estimated 9.5 to 13 million people died in Northern China. This disaster is referred to as 'Dīngwù Qíhuāng' in China, or 'The Northern Chinese Famine of 1876–1879' in other countries. (-20% food production)";
      foodEfficiency = 2
    }
    if (year == 1880) {
      winDiv.style.display = "block";
      foodEfficiency = 2.5
    }
    updateStats()
  }
}

function updateStats() {
  if (numDoctors*doctorEfficiency-population <= 0) {
    doctorStat.innerHTML = "Health: "+Math.floor(numDoctors*doctorEfficiency-population)+'m Population';
  } else {
    doctorStat.innerHTML = "Health: -0m Population";
  }

  if (numGuards*guardEfficiency-population <= 0) {
    guardStat.innerHTML = "Defense: "+Math.floor(numGuards*guardEfficiency-population)+'m Population';
  } else {
    guardStat.innerHTML = "Defense: -0m Population";
  }

  if (numFarmers*foodEfficiency-population > 0) {
    foodStat.innerHTML = "Food Production: +"+Math.floor(numFarmers*foodEfficiency-population)+'m Population';
  } else {
    foodStat.innerHTML = "Food Production: "+Math.floor(numFarmers*foodEfficiency-population)+'m Population';
  }
  nojobStat.innerHTML = "No Job: "+numNoJob+"m";
  populationDisplay.innerHTML = "Population: " + population + " Million";
}

function reset() {
  population = 430
  numFarmers = 0
  numGuards = 0
  numDoctors = 0
  numNoJob = 430
  year = 1874
  foodEfficiency = 2.5
  guardEfficiency = 4
  doctorEfficiency = 3.5
  nextButton.innerHTML = "Next Year";
  eventNews.innerHTML = "None";
  updateStats()
  event.style.display = "block";
  stats.style.display = "block";
  title.style.display = "block";
  mainDiv.style.display = "block";
  mainDiv2.style.display = "block";
  mainDiv3.style.display = "block";
  nextButton.style.display = "block";
  yearStatsDiv.style.display = "none";
  lostDiv.style.display = "none";
}

function exit() {
  yearStatsDiv.style.display = "none";
}
