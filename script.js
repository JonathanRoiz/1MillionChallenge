let farmerDisplay = document.getElementById("farmerDisplay")
let guardDisplay = document.getElementById("guardDisplay")
let doctorDisplay = document.getElementById("doctorDisplay")
let foodStat = document.getElementById("foodStat")
let guardStat = document.getElementById("guardStat")
let doctorStat = document.getElementById("doctorStat")
let nojobStat = document.getElementById("nojobStat")
let nextButton = document.getElementById("nextButton")
let yearDisplay = document.getElementById("year")
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

let roles = [
  "Guards",
  "Farmers",
  "Doctors",
  "NoJob",
];
//roles[Math.floor(Math.random()*4)]
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
      alert('You Lost!');
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
      eventNews.innerHTML = "The Northern Chinese Famine of 1876–1879 is finally over! Many people have died, but you have managed to save China!";
      foodEfficiency = 2.5
    }
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
  }
}

function exit() {
  yearStatsDiv.style.display = "none";
}
