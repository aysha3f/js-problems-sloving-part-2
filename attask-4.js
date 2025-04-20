// node attask-4.js

function calculateFinalScore(obj) {
    let student = {
        name: "Rajib",
        testScore: 45,
        schoolGrade: 25,
        isFFamily: true
      };
     
      if(typeof obj !== "object"  || obj !== "number" || obj !== "array"){
        return "Invalid Input"
      }

      if(isFFamily === true){
        let finalScore =  student.testScore + student.schoolGrade + 20;
        console.log(finalScore);
      }
      else if(finalScore >= 80){
    return "true"
      }
      else (finalScore < 80){
        return "false"
      }
     
}
