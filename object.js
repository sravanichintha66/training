const student={
    name:"Arvind",
    age:26,
    subjects:["Math","Physics","Computer Science"],
    scores:{
        Math:85,
        Physics:78,
        ComputerScience:92
    },
    isGraduated:false
};

//access the student's name and change it to ram
student.name="Ram";
console.log(student.name);
console.log(student);

//add a new subject Biology
student.subjects.push("Biology");
console.log(student);

//highest score from the scores object
function getHighestScore(student){
    const scores=student.scores;
    const highestScore=Math.max(scores.Math,scores.Physics,scores.ComputerScience);
    return highestScore;
}
const highestScore=getHighestScore(student);
console.log("Highest score:",highestScore);

//delete physics property from scores object
delete student.scores.Physics;
console.log(student);

//check Biology exists in the subjects array
const isBiologyPresent=student.subjects.includes("Biology");
if(isBiologyPresent){
    console.log("Biology Exists.");
}else{
    console.log("Biology does not Exists.");
}