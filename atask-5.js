// node atask-5.js

function  waitingTime(waitingTimes  , serialNumber) {
  if(!Array.isArray(waitingTimes)){
    return "Invalid Input"
  }

  for (const time of waitingTimes){
    if(typeof time !== "number"){
        return "Invalid Input"
    }
  }

  if(typeof serialNumber !== "number"){
    return "Invalid Input"
  }
  
  let totalTime = 0;
  for(const time of waitingTimes){
    totalTime = totalTime + time;
  }

  let averageTime = Math.round(totalTime / waitingTimes.length);
  let totalPeopleBeforeIsrat = serialNumber - 1;
  let peopleRemaining = totalPeopleBeforeIsrat - waitingTimes.length;

  if(peopleRemaining <= 0){
    return 0;
  }
  let waitingTime = averageTime * peopleRemaining;
  return waitingTime;
}
// console.log(waitingTime([ 3, 5, 7, 11, 6 ], 10));
// console.log(waitingTime([13, 2], 6));
// console.log(waitingTime([13, 2, 6, 7, 10], 6));
// console.log(waitingTime([6], 4))
// console.log(waitingTime(7 , 10))
// console.log(waitingTime("[6,2]", 9))
console.log(waitingTime([7, 8, 3, 4, 5], "9"))


// node atask-5. 


