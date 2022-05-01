let raceNumber = Math.floor(Math.random() * 1000);
let  statusForRegistration = false;
let  runnerAge = 18;

if (statusForRegistration === true && runnerAge === 18  ){
  raceNumber += 1000;
}

if (runnerAge > 18 && statusForRegistration === true){
 console.log(`Racenumber ${raceNumber}, your race will start at 09:30 am.`);
} else if (runnerAge > 18 && statusForRegistration === false){
  console.log(`Racenumber ${raceNumber}, your race will start at 11.30 am.`);
} else if (runnerAge < 18){
console.log(`Racenumber ${raceNumber}, your race will start at 12.30 am.`);
} else{
  console.log( `Please see the registration desk.`);
}