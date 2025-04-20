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
}
