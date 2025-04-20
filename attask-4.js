// node attask-4.js

function calculateFinalScore(obj) {
  if(typeof obj !== "object" || obj === null || Array .isArray (obj)){
    return"Invalid Input"
  }

  const name = obj.name;
  const testScore = obj.testScore;
  const schoolGrade = obj.schoolGrade;
  const isFFamily = obj.isFFamily;

  if(typeof name !== "string"){
    return "Invalid Input"
  }
   if(typeof testScore !== number || testScore > 50){
    return "Invalid Input"
   }
   if(typeof schoolGrade !== number || schoolGrade > 30){
    return "Invalid Input"
   }
   if(typeof isFFamily !== boolean){
    return "Invalid Input"
   }
   let bonus = 0;
   if (isFFamily === true){
    bonus = 20;
   }
   else{
    bonus = 0;
   }

   let finalScore = testScore + schoolGrade + bonus;
   if(finalScore >= 80){
    return true;
   }
   else{
    return false;
   }
}
console.log(calculateFinalScore({ name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : true  }))
